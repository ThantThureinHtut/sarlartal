# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

Monorepo with two packages that must be run simultaneously:
- `backend/` — Express 5 + TypeScript API server (port 3001)
- `frontend/` — Next.js 16 app (port 3000)

## Commands

### Backend (`cd backend`)
```bash
npm run dev      # Run with tsx (development)
npm run build    # Compile TypeScript to dist/
npm start        # Run compiled output
npx prisma migrate dev    # Run migrations
npx prisma generate       # Regenerate Prisma client
```

### Frontend (`cd frontend`)
```bash
npm run dev      # Start Next.js dev server
npm run build    # Production build
npm run lint     # Run ESLint
```

## Backend Architecture

**Entry point** `app.ts` — wires up middleware in strict order:
1. CORS (must be first, `credentials: true` required for cross-origin cookies)
2. `better-auth` handler at `/api/auth/**` — must be BEFORE `express.json()`
3. Static file serving at `/uploads` from `public/uploads/`
4. `express.json()`
5. All API routes under `/api`, preceded by `apiMiddleware`

**Layered structure** — Route → Controller → Service, one folder per layer under `src/` (see `backend/CLAUDE.md` for full detail):
- `src/routes/` — Express routers only, no req/res logic or Prisma imports. `src/routes/api.ts` is the root router; mounts sub-routers and defines `/get-user` directly (delegating to `user_controller.getUser` — select includes core profile fields — `name`, `email`, `emailVerified`, `bio`, `status`, `image`, `cover_image` — plus `likes`, `savedBySnaps`, `following`, the current user's own Like/SavedSnap/Follow rows used to compute per-card liked/bookmarked/following state). This one endpoint backs both the profile page and the card-state hydration, so extend its `select` additively rather than adding a parallel endpoint. `src/routes/user/snap_route.ts` — `/api/snaps` (GET list, GET `/following` feed, GET `/saved` bookmarks, POST create/like/bookmark). `src/routes/user/follow_route.ts` — `/api/follow` (POST `/toggle` — follow/unfollow a user by `followingId`). `src/routes/user/profile_route.ts` — `/api/user/profile` (POST avatar/name/bio/status/email).
- `src/controllers/user/{snap,follow,profile,user}_controller.ts` — own every `(req, res) => Promise<void>` handler: req/res reading, try/catch, status codes, response JSON, logging. Call services with plain typed params, never pass `req`/`res` down.
- `src/services/user/{snap,follow,profile,user}_service.ts` — plain async functions containing only the Prisma calls; no Express types, no try/catch.

New endpoints should follow this same split rather than putting logic inline in a route file.

**Auth flow**: `src/routes/middleware/apimiddleware.ts` always calls `next()` — it just populates `req.user` and `req.session` from the session cookie if valid. Individual controllers check `req.user?.id !== undefined` themselves and return 401 if absent — there is no enforcement at the middleware layer. `req.user` and `req.session` are typed via `src/types/express.d.ts` which augments Express `Request` using `auth.$Infer`. `apiMiddleware` for the profile routes is applied once at the mount point in `api.ts`, not inside `profile_route.ts` — keep it there. For `POST /snaps/create`, `upload.single("image")` runs *before* `apiMiddleware`; that order matters.

**File uploads**: multer stores snaps in `public/uploads/snaps/` and avatars in `public/uploads/avatars/`. The stored path (e.g. `/uploads/snaps/filename.jpg`) is saved directly to the DB and served by Express static middleware.

**Prisma**: client generated to `generated/prisma/` (non-default). CLI config is `prisma.config.ts` at the backend root (not `prisma/schema.prisma`). DB connection in `prisma/lib/prisma.ts`.

**Environment**: for running the backend directly (not via Docker), it requires `backend/.env` with `DATABASE_URL` and `FRONTEND_URL` pointed at `localhost` (not the `db`/`backend` service hostnames used inside Docker — see the Docker dev environment note below for the separate root-level `.env`).

## Frontend Architecture

**Next.js 16** — read `node_modules/next/dist/docs/` before writing any Next.js code; this version has breaking changes from older Next.js.

**App Router route groups** (group names are not URL segments):
- `(root)` — public pages (home, about)
- `(auth)` — guest-only pages (login, signup)
- `(user)/(navbar_pages)` — authenticated pages with `DashboardNavbar` (dashboard, following_posts, saved_snaps)
- `(user)/(profile)` — authenticated profile pages (profile, settings)
- `(action)/serveraction.ts` — all Server Actions in one file

**Auth guard**: `proxy.ts` is the Next.js middleware (exports `proxy` function + `config` matcher). It reads the `better-auth.session_token` cookie to decide whether to redirect. Guest-only routes redirect logged-in users to `/dashboard`; protected routes redirect guests to `/login`.

**Server Actions** in `app/(action)/serveraction.ts` call the backend at `process.env.API_URL` (injected as `http://localhost:3001` via `next.config.ts` — no `.env` needed in frontend).
- For GET requests: forward all headers with `headers: await headers()`
- For FormData/multipart POST requests: forward **only the cookie** (`headers: { cookie }`) — passing all headers overwrites the multipart `Content-Type` boundary that Node.js fetch sets automatically for `FormData` bodies. Never `JSON.stringify(formData)` — `FormData` is not JSON-serializable and produces `"{}"`.
- `revalidateTag` in this Next.js version requires 2 arguments: `revalidateTag("tag", "max")`
- Never import `NextRequest` / `NextResponse` in server actions — those are for Route Handlers only (`app/api/*/route.ts`). Server actions return plain objects.
- Actions used with `useActionState` must have signature `(prevState: State, formData: FormData) => Promise<State>`. The `prevState` parameter is required even if unused (prefix with `_` to silence the TS warning).

**Auth client**: `lib/auth-client.ts` exports `signIn`, `signOut`, `signUp`, `useSession`, `getSession` from `better-auth/react`, with `baseURL: NEXT_PUBLIC_API_URL` (browser-facing, `http://localhost:3001`). **Only call these from Client Components** (`"use client"` files like `login/page.tsx`, `signup/page.tsx`, `DashboardNavbar.tsx`) — the browser can reach `localhost:3001` directly. Never call `getSession()` from a Server Component: under Docker (see below) the frontend container's `localhost:3001` doesn't route to the backend container, so it throws `fetch failed`/`ECONNREFUSED`. For server-side "who's logged in" reads, use the `getUser()` server action instead (`app/(action)/serveraction.ts`), which correctly targets `process.env.API_URL` and forwards the cookie — this is what `Profile.tsx` and every `*CardList.tsx` use.

**Docker dev environment**: `docker-compose.yml` at the repo root runs `db` (Postgres), `backend` (port 3001), and `frontend` (port 3000), each bind-mounting its source directory for live edits. Both backend (`tsx watch app.ts`) and frontend (`next dev` with Turbopack) hot-reload on save — no manual restart needed for either. Frontend server code reaches the backend via internal Docker DNS (`API_URL=http://backend:3001`); the browser reaches it via the published port (`NEXT_PUBLIC_API_URL=http://localhost:3001`) — see the Server Actions note above for which one to use where.

All `docker-compose.yml` values (Postgres creds, `DATABASE_URL`, `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, `FRONTEND_URL`, `API_URL`, `NEXT_PUBLIC_API_URL`) come from a root-level **`.env`** (gitignored — auto-loaded by `docker compose` for `${VAR}` substitution, distinct from `backend/.env` used for non-Docker local dev). A committed **`.env.example`** documents the required keys with placeholder values; copy it to `.env` and fill in real values on a fresh clone. Note the current Dockerfiles' `CMD` always runs the dev script (`npm run dev`) — this compose setup is dev-only (bind mounts, weak default creds); a real production deploy needs a separate build (`npm run build && npm start` for the backend) without the source bind-mounts.

**Feed list components** (`components/Dashboard/CardBox/`): `CardList.tsx` (dashboard, `getSnaps()`), `FollowingCardList.tsx` (`/following_posts`, `getFollowingPosts()`), and `SavedCardList.tsx` (`/saved_snaps`, `getSavedSnaps()`) are intentionally near-identical server components — each does `Promise.all([getX(), getUser()])` then maps to `CardBox`, differing only in fetcher and empty-state copy. This mirrors the codebase's existing convention of duplicating small per-purpose components rather than extracting a shared abstraction. Both new pages reuse `CardBox`/`CardBoxFooter`/`CardBoxSkeleton` as-is via the same `Suspense` + skeleton-fallback pattern as `dashboard/page.tsx`.

**Follow button**: `CardBox.tsx` renders `FollowButton.tsx` (client component, optimistic toggle calling the `followUser` server action) in the card header whenever `snap.userId !== current_user.id`. `current_user` is the `getUser()` result extended with `following: Follow[]`; `FollowButton`'s initial state is derived via `current_user.following.some(f => f.followingId === userId)`.

**Profile page** (`components/Dashboard/Profile/`): `Profile.tsx` (server component) fetches via `getUser()`, not `getSession()` (see Auth client note above), and passes the result to `ProfileClient.tsx` (client component owning local edit state) which renders `ProfileHeader.tsx` (avatar/name/status) and `AccountSection.tsx` (bio/name/email/password edit dialogs, backed by `InfoRow.tsx`). Avatar and cover images use `next/image` with `fill` inside a `relative`-positioned, explicitly-sized container — never render them without `fill` or explicit `width`/`height`, since Next throws a hard runtime error otherwise (this previously crashed the page). Every field-save handler in `AccountSection.tsx` (bio/name/email) should POST to its matching `/api/user/profile/*/update` route — if you add a new editable field, wire the fetch immediately alongside the local `useState` update, don't leave it client-only.

**UI stack**: shadcn/ui + custom `Field`/`FieldGroup`/`FieldLabel`/`FieldSet` wrappers (Base UI `@base-ui/react`) in `components/ui/field.tsx` + Tailwind CSS v4. `cn()` in `lib/utils.ts` combines `clsx` + `tailwind-merge`. Form validation uses Zod v4 client-side in page components only (not in Server Actions).

**Theme**: `next-themes` with `class` strategy; oklch-based CSS custom properties in `globals.css`. Fonts: Roboto (`--font-sans`), Noto Sans (`--font-heading`), Chewy (loaded per-page where needed).

## Data Model (key relationships)

- `User` → many `Post` (snaps), many `Like`, many `Follow` (both directions), many `SavedSnap` (as author and as saver)
- `Post` has `likeCount` (denormalized), `image_url`, `title`
- `Like` and `Follow` both use composite PKs (`userId_postId`, `followerId_followingId`) toggled via a `findUnique` + create-or-delete pattern. Only like/unlike uses `$transaction`, since it also has to keep `Post.likeCount` in sync — Follow has no denormalized counter, so `follow_service.ts` just creates/deletes the row directly
- `SavedSnap` links a post to the user who saved it (`postId_savedUserId` composite unique), plus tracks the original author separately as `authorId`
