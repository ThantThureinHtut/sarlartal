# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev                # tsx watch app.ts — hot reload on save
npm run build               # compile TypeScript to dist/
npm start                   # run compiled output (node dist/src/app.js)
npx prisma migrate dev      # run migrations
npx prisma generate         # regenerate Prisma client (output: generated/prisma/, not the default location)
```

No lint script or test suite is configured in `package.json`.

Requires a `.env` file with `DATABASE_URL` and `FRONTEND_URL` pointed at `localhost` for local (non-Docker) runs — see the root `docker-compose.yml`/`.env.example` for the Docker-based dev setup, which injects these instead.

## Architecture

**Entry point** `app.ts` wires up middleware in a strict order that matters:
1. CORS (`credentials: true`, `origin: process.env.FRONTEND_URL`) — must be first
2. `better-auth` handler at `/api/auth/{*any}` via `toNodeHandler(auth)` — must run BEFORE `express.json()`, since better-auth needs the raw request body
3. Static file serving at `/uploads` from `public/uploads/`
4. `express.json()`
5. `apiRouter` mounted at `/api`

**Layered structure** — Route → Controller → Service, one folder per layer under `src/`:
- `src/routes/` — Express routers only, no req/res logic and no Prisma imports. `api.ts` is the root router: mounts the three domain sub-routers and also defines `/get-user` directly (delegating to `user_controller.getUser`). `routes/user/{snap,follow,profile}_route.ts` wire `router.METHOD(path, ...middleware, controllerFn)` for their domain. `routes/middleware/` holds `apiMiddleware` (session hydration) and `upload`/`avatarUpload` (multer disk-storage configs).
- `src/controllers/user/{snap,follow,profile,user}_controller.ts` — own every `(req, res) => Promise<void>` handler: reading `req.body`/`req.file`/`req.user`, try/catch, status codes, response JSON, and all logging. Controllers call services with plain typed params — never pass `req`/`res` down into a service.
- `src/services/user/{snap,follow,profile,user}_service.ts` — plain async functions containing only the Prisma calls; no Express types, no try/catch (errors bubble up to the controller's catch block).

When adding an endpoint, follow this same split rather than putting logic inline in the route file.

**Auth**: `apiMiddleware` (`src/routes/middleware/apimiddleware.ts`) *always* calls `next()` — it only populates `req.user`/`req.session` from the session cookie (via `auth.api.getSession()`) if the session is valid, and never rejects a request itself. Every controller that needs auth checks `req.user?.id !== undefined` itself and returns 401 if absent — there is no enforcement at the middleware layer. `req.user`/`req.session` types come from `src/types/express.d.ts`, which augments Express's `Request` via `typeof auth.$Infer.Session`. `src/lib/auth.ts` configures better-auth with the Prisma adapter, email+password login (`autoSignIn: true`), and three custom user fields beyond the plugin's defaults: `status` (string, default `"OFFLINE"`), `bio`, `cover_image`.

**Middleware attachment point matters**: `apiMiddleware` for the profile routes is applied once at the mount point in `api.ts` (`apiRouter.use("/user/profile", apiMiddleware, profileRouter)`) rather than inside `profile_route.ts` — keep it there instead of duplicating it per-route. For `POST /snaps/create`, `upload.single("image")` runs *before* `apiMiddleware` in the middleware chain — that order is required so the file/body are parsed off the multipart request first.

**File uploads**: multer stores snaps in `public/uploads/snaps/` and avatars in `public/uploads/avatars/` (`src/routes/middleware/upload.ts` — two separate `diskStorage` configs, exported as `upload` and `avatarUpload`). The stored path (e.g. `/uploads/snaps/<filename>`) is saved directly to the DB column and served back by the static middleware registered in `app.ts`.

**Prisma**: the client is generated to `generated/prisma/` (non-default location, set via the `generator` block in `prisma/schema.prisma`), not the default `node_modules/@prisma/client`. CLI config lives in `prisma.config.ts` at the backend root rather than the schema file the CLI reads by default. The client instance (`prisma/lib/prisma.ts`) is constructed with `@prisma/adapter-pg` (`PrismaPg`) rather than Prisma's built-in Postgres driver, using `DATABASE_URL` from the environment.

**Data model** (`prisma/schema.prisma`): `User` has many `Post` ("snaps"), `Like`, `Follow` (both directions, via `"Followers"`/`"Following"` named relations), and `SavedSnap` (both as the original author and as the saving user, via separate named relations). `Like` and `Follow` use composite primary keys (`userId_postId`, `followerId_followingId`) and are toggled everywhere with a `findUnique` + create-or-delete pattern. Only `toggleLike` (in `snap_service.ts`) uses `$transaction`, since liking also has to keep `Post.likeCount` (a denormalized counter) in sync; `toggleFollow` has no counter to maintain, so it just creates/deletes the row directly. `SavedSnap` links a post to the saving user (`postId_savedUserId` composite unique) while tracking the original author separately as `authorId`.

**Known quirks preserved intentionally** (don't "fix" these without checking with the user first — they were deliberately kept as-is during a structure-only refactor):
- `profile_service.updateStatus`'s `status` parameter is typed `any` rather than the `UserStatus` Prisma enum, matching `req.body`'s implicit `any` today — typing it strictly would introduce a new compile error that doesn't reflect any real runtime validation. `profile_controller.updateStatus` validates the incoming value against the enum's literal values with zod before it reaches the service, so the `any` here is intentionally just the service-layer type, not a runtime validation gap.

**Input validation**: mutating endpoints (`snap`, `follow`, `profile` controllers) validate `req.body` with `zod` schemas defined inline at the top of each controller file, returning 400 with the first validation issue's message on failure. Keep new endpoints consistent with this pattern rather than trusting `req.body` fields directly.
