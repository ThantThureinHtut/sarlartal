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

**Route files** (not in `app.ts` — all logic lives in `src/routes/`):
- `src/routes/api.ts` — root router; mounts sub-routers and defines `/get-user`
- `src/routes/user/snap_route.ts` — `/api/snaps` (GET list, POST create/like/bookmark)
- `src/routes/user/profile_route.ts` — `/api/user/profile` (POST avatar/name/bio/status/email)

**Auth flow**: `src/routes/middleware/apimiddleware.ts` always calls `next()` — it just populates `req.user` and `req.session` from the session cookie if valid. Individual route handlers check `req.user?.id !== undefined` themselves and return 401 if absent. `req.user` and `req.session` are typed via `src/types/express.d.ts` which augments Express `Request` using `auth.$Infer`.

**File uploads**: multer stores snaps in `public/uploads/snaps/` and avatars in `public/uploads/avatars/`. The stored path (e.g. `/uploads/snaps/filename.jpg`) is saved directly to the DB and served by Express static middleware.

**Prisma**: client generated to `generated/prisma/` (non-default). CLI config is `prisma.config.ts` at the backend root (not `prisma/schema.prisma`). DB connection in `prisma/lib/prisma.ts`.

**Environment**: backend requires `backend/.env` with `DATABASE_URL` and `FRONTEND_URL`.

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

**Auth client**: `lib/auth-client.ts` exports `signIn`, `signOut`, `signUp`, `useSession`, `getSession` from `better-auth/react`, all pointed at `http://localhost:3001`.

**UI stack**: shadcn/ui + custom `Field`/`FieldGroup`/`FieldLabel`/`FieldSet` wrappers (Base UI `@base-ui/react`) in `components/ui/field.tsx` + Tailwind CSS v4. `cn()` in `lib/utils.ts` combines `clsx` + `tailwind-merge`. Form validation uses Zod v4 client-side in page components only (not in Server Actions).

**Theme**: `next-themes` with `class` strategy; oklch-based CSS custom properties in `globals.css`. Fonts: Roboto (`--font-sans`), Noto Sans (`--font-heading`), Chewy (loaded per-page where needed).

## Data Model (key relationships)

- `User` → many `Post` (snaps), many `Like`, many `Follow` (both directions), many `SavedSnap` (as author and as saver)
- `Post` has `likeCount` (denormalized), `image_url`, `title`
- `Like` and `Follow` use composite PKs; like/unlike and follow/unfollow use `$transaction` to keep `likeCount` in sync
- `SavedSnap` links a post to the user who saved it, plus tracks the original author separately
