---
name: performance-code-refactor
description: Refactor existing frontend code (Next.js 16 + TypeScript) for better performance — slow/laggy components, unnecessary re-renders, missing or misconfigured caching, oversized client bundles, sequential data fetches, deprecated Next.js 16 APIs. Use this whenever the user says a component/page feels slow, asks to "optimize", "improve performance", "make this faster", or "refactor for performance". Hard rule this skill enforces: never change the component's existing logic or output behavior — only how efficiently it gets there. Knows this project's actual Next.js 16 Cache Components setup (`"use cache"`, `cacheLife`, `cacheTag`, `revalidateTag`/`updateTag`/`refresh`), not generic or pre-16 Next.js caching advice.
---

# Performance Code Refactor

The goal is always "same behavior, cheaper to produce it." A performance refactor that changes what the component does — a different prop shape, a different error path, a different render order — isn't a performance refactor, it's a rewrite, and it's out of scope here even if it happens to also be faster.

## Ground rule: never change the logic

- Every input that produced a given output before this refactor must produce the exact same output after it. Same props in, same JSX/return shape out, same side effects, same order of operations, same error/success shapes.
- Don't "fix" a bug you notice while refactoring, don't rename things beyond what the performance change requires, don't add validation/error-handling that wasn't there, don't consolidate duplicate types or components unless asked. If something looks wrong but isn't a performance issue, report it separately instead of folding it into this change — the user asked for faster, not different.
- If you genuinely can't tell whether a change preserves behavior, don't make it — ask instead of guessing.
- After refactoring, re-read your diff like a reviewer who wrote the original: every remaining code path should map to a path that existed before. If you can't explain a line as "the same thing, faster," take it back out.

## Step 0: Find the actual reason it's slow

Don't refactor speculatively. Read the target file plus its immediate caller and callee (e.g. a card component and the list component that renders it) so you understand the real data flow, then name the specific issue before touching anything:

- A server component doing sequential `await`s where the fetches don't depend on each other
- Data that's fetched fresh on every request but is safe to cache
- A cached function whose caching signals contradict each other
- A client component re-rendering more often than its props actually change
- A large client-only dependency pulled into the initial bundle unnecessarily
- A deprecated or redundant Next.js 16 API in the hot path (e.g. image loading props)

If you can't point to one of these (or something similarly concrete), there's nothing to refactor yet — investigate further rather than changing code "just in case."

## Next.js 16 Cache Components — this project's actual setup

`frontend/next.config.ts` sets `cacheComponents: true`, which opts this app into Next 16's Cache Components model: caching is explicit per-function via the `"use cache"` directive, not implicit fetch-level caching like pre-16 Next.js. Don't reach for old patterns (`export const revalidate`, relying on `fetch`'s own cache behavior) — they don't drive caching the way they used to here.

The existing working pattern, from `app/(action)/serveraction.ts`:

```ts
export async function getSnaps() {
  "use cache";
  cacheLife("hours");
  cacheTag("snaps");
  // ... fetch and return
}
```

and the matching invalidation on mutation:

```ts
revalidateTag("snaps", "max"); // after likeSnap / bookmarkSnap
updateTag("snaps"); refresh();  // after sendSnap creates new data
```

When adding or touching a cached data-fetcher, follow this exact shape: `"use cache"` + `cacheTag(...)` + `cacheLife(...)` on the read side, and `revalidateTag`/`updateTag` on the same tag from whichever mutation invalidates that data.

A few specifics worth knowing before you touch anything here:

- **`revalidateTag` takes two arguments in this Next version** — `revalidateTag(tag, profile)` (e.g. `"max"`). Don't "simplify" a call back to one argument during a refactor; that would silently change its revalidation behavior.
- **Watch for contradictory cache signals.** A function marked `"use cache"` whose inner `fetch` also sets `cache: "no-store"` is sending mixed signals — the outer directive governs the function's own cached result regardless of the inner fetch option. This exists in the codebase today (`getSnaps` does this). Don't silently "clean it up" as part of an unrelated performance pass — that's a cache-correctness question, not a refactor, and deserves its own conversation with the user.
- **Not everything should be cached.** Several Server Actions (`getUser`, `getFollowingPosts`, `getSavedSnaps`) intentionally fetch fresh per request with `cache: "no-store"` and no `"use cache"` wrapper — this may be correct if the data is per-session/always-should-be-fresh. Don't wrap something in `"use cache"` just because it's uncached today; confirm the data is safe to go stale for the given `cacheLife` window first.
- For exact current semantics, read `node_modules/next/dist/docs/01-app/01-getting-started/08-caching.md` and the function references under `.../03-api-reference/04-functions/` (`unstable_cache`, `cacheLife`, `cacheTag`, `revalidateTag`) rather than relying on general Next.js knowledge — the caching model changed significantly in 16.

## Next.js 16 API changes that affect "performance-looking" props

- **`priority` on `next/image` is deprecated in Next 16 in favor of `preload`.** If a component you're already refactoring for performance uses `priority={...}` (e.g. `CardBox.tsx` does today), migrating it to the `preload` prop with the same intent (mark the LCP/above-the-fold image) is an in-scope, behavior-preserving cleanup — it's the same eager-load behavior on the current API, not a logic change. Don't go hunting through unrelated files to rename this unprompted; only fix it where you're already working.
- **Never set both a preload signal and `loading` on the same `<Image>`.** The docs explicitly say not to combine `preload`/`priority` with `loading` — they're duplicate signaling for the same intent. If you find both on one image, keep exactly one, matching what the image is actually for (LCP/above-the-fold → `preload` or `loading="eager"`, not both).
- Check `node_modules/next/dist/docs/01-app/03-api-reference/02-components/image.md` before assuming pre-16 `next/image` behavior — several props changed defaults or were deprecated between 16.0 and 16.2.

## React Server/Client Component performance

- Default to Server Components, as this codebase already does (`CardBox`, `CardList` are `async function` components with no `"use client"`). Push `"use client"` down to the smallest leaf that truly needs interactivity — never convert a whole subtree to client because one child needs a click handler.
- Parallelize independent fetches with `Promise.all` instead of sequential `await`s — `CardList.tsx` already does `Promise.all([getSnaps(), getUser()])`. If you find a chain of `await`s where the calls don't actually depend on each other, that's a real, safe performance fix (the results are combined identically, just fetched concurrently) — but if you're unsure whether one await depends on a prior one's result, don't parallelize it; that would be a logic change, not a performance one.
- Use `useMemo`/`useCallback` for genuinely expensive derivations or to keep a stable reference passed into a memoized child, and wrap pure, frequently-re-rendered presentational client components in `React.memo`. Don't apply these to cheap computations or components that get new props on every render anyway — that's overhead with no payoff, and this codebase doesn't currently use them anywhere, so don't add them reflexively.
- Avoid recreating objects/arrays/inline functions in JSX when they're passed to a memoized child or used as an effect dependency — that silently defeats the memoization.
- Reach for `next/dynamic` (`ssr: false`) only for genuinely large client-only dependencies (charts, rich text editors) — confirm the component needs to be client-rendered at all before reaching for this.

## TypeScript: stay strict, stay clean

`tsconfig.json` has `strict: true`. During a performance refactor:

- Never introduce `any`, `as` casts, or non-null assertions (`!`) to route around a type error. If the original already had one backed by a real runtime guarantee (e.g. `STATUSES.find(s => s.value === user.status)!` in `CardBox.tsx`, safe because status is validated server-side), preserve it as-is rather than turning it into a differently-behaving conditional — that's a logic change wearing a type-safety costume.
- Don't consolidate duplicate inline types (e.g. the `Like`/`Follow`/`SavedSnap` shapes repeated across `CardBox.tsx` and `CardList.tsx`) as a drive-by during a performance pass, even if you notice the duplication — that's a structural cleanup worth flagging separately, not something to fold in silently.
- Keep discriminated return shapes intact — the Server Actions in `serveraction.ts` return `{ status, error }` / `{ success, error }` on failure paths. Don't collapse these into thrown exceptions or reshape them; callers pattern-match on these exact fields.

## Workflow

1. Read the target file and its immediate caller/callee to understand real data flow.
2. Name the specific performance issue — don't refactor without one.
3. Make the smallest change that resolves it while keeping every input→output mapping identical to before.
4. Re-read the diff and confirm nothing but the performance characteristics changed.
5. Report (don't silently fix) anything else you noticed that isn't a pure performance win.

## Before handing it back

- Does every input that produced a given output before still produce the same output now?
- Did you avoid introducing `any` / `as` / non-null assertions that weren't already there?
- If you touched a cached data-fetcher, does it follow the `"use cache"` + `cacheLife` + `cacheTag` + matching `revalidateTag`/`updateTag` shape already used in `serveraction.ts`?
- If you touched a `next/image` usage, is exactly one loading-priority signal set — never `priority`/`preload` together with `loading`?
- Would the person who wrote the original code recognize this as "the same logic, but faster" rather than a rewrite?
