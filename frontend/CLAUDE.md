# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

Monorepo with two packages:
- `backend/` — Express 5 + TypeScript API server (port 3001)
- `frontend/` — Next.js 16 app (port 3000)

## Commands

### Backend (`cd backend`)
```bash
npm run dev      # Run with ts-node (development)
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

## Architecture

### Backend
- Entry point: `app.ts` — sets up Express, middleware, routes, and starts the server
- Database: PostgreSQL via Prisma with `@prisma/adapter-pg` driver adapter
- Prisma client is generated to `generated/prisma/` (not the default location)
- Prisma config lives in `prisma.config.ts` (not `prisma/schema.prisma` for the CLI config)
- DB connection is initialized in `prisma/lib/prisma.ts` and uses `DATABASE_URL` env var
- Routes are defined directly in `app.ts` (no separate router files yet)

### Frontend
- Next.js 16 — **read `node_modules/next/dist/docs/` before writing any Next.js code**; this version has breaking changes from older Next.js
- App Router with route groups (parentheses are not URL segments):
  - `(root)` — public marketing pages (home, about)
  - `(auth)` — unauthenticated pages (login, signup)
  - `(user)/(navbar_pages)` — authenticated pages with `DashboardNavbar` (dashboard, following_posts, saved_snaps)
  - `(user)/(profile)` — authenticated profile-related pages (profile, settings)
  - `(action)` — Server Actions only (`serveraction.ts`)
- `proxy.ts` acts as middleware for route-level auth guarding — redirects unauthenticated users away from protected routes and logged-in users away from guest-only routes; reads the `better-auth.session_token` cookie
- Auth: `better-auth` library; client instance in `lib/auth-client.ts` exports `signIn`, `signOut`, `signUp`, `useSession`, `getSession` — all pointed at `http://localhost:3001`
- Server Actions in `app/(action)/serveraction.ts` call the backend REST API at `http://localhost:3001`
- UI components: shadcn/ui base + custom `Field`/`FieldGroup`/`FieldLabel`/`FieldSet` wrappers (built on Base UI `@base-ui/react`) in `components/ui/field.tsx` + Tailwind CSS v4
- Form validation: Zod (`zod` v4) used client-side in page components, not in Server Actions
- `cn()` utility in `lib/utils.ts` combines `clsx` + `tailwind-merge`
- Fonts: Roboto (`--font-sans`), Noto Sans (`--font-heading`), Chewy (decorative, loaded per-page)
- Theme: `next-themes` wraps the root layout; dark mode uses `class` strategy with oklch-based CSS custom properties in `globals.css`
- `FRONTEND_URL` and `BACKEND_URL` env vars are injected via `next.config.ts` (no `.env` file needed for frontend)

## Environment

Backend requires a `.env` file with:
```
DATABASE_URL=postgresql://...
```
