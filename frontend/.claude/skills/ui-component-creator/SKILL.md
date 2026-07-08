---
name: ui-component-creator
description: Build or restyle any UI component, page section, card, button, modal, form, nav, or layout in the frontend (Next.js + Tailwind CSS v4 + shadcn/ui + GSAP). Use this whenever the user asks to create, design, add, or redo a component/page/section — even if they don't say "component" explicitly (e.g. "make a pricing section", "redesign the profile card", "add a new modal", "animate the like button"). Enforces this project's specific look: clean modern layout, subtle 3D depth (soft layered shadows and highlight edges, not skeuomorphism), fully responsive, dark-mode aware via the existing oklch theme tokens, no emoji anywhere, icons only from lucide-react or inline SVG, and deliberate, smooth, eye-catching micro-animations (button click feedback, icon/SVG animation, color transitions) applied only where a state change actually warrants it — not blanket animation on everything.
---

# UI Component Creator

Every component you produce must look like it belongs in this codebase, not like a generic AI-generated component pasted on top. That means matching the existing token system, the existing depth language, and the existing file conventions — not inventing a new style per component.

## Step 0: Look before you build

Before writing any markup, check two things:

1. **Read `frontend/app/globals.css`** for the live theme — oklch color tokens (`--background`, `--card`, `--primary`, `--border`, `--ring`, etc.) and the radius scale (`--radius-sm` through `--radius-4xl`, all derived from one `--radius` base). Never hardcode a hex/rgb color or an arbitrary `rounded-[Npx]` — always reference a theme token or the radius scale so the component stays correct in both light and dark mode automatically.
2. **Read one or two existing components close to what you're building** — e.g. `components/ui/card.tsx` and `components/ui/button.tsx` for primitives, or the relevant file under `components/Dashboard/` for a feature composite. Match their patterns: `cn()` from `@/lib/utils` for class merging, `cva()` for variants, `data-slot="..."` on the root element, `group/name` + `group-data-*` for compound state instead of prop-drilling into children.
3. **Check `frontend/package.json` for `gsap` and `@gsap/react`** if the component needs anything beyond a simple CSS transition. Neither is installed yet as of this writing — don't assume it's there, and don't install it speculatively either; add it (`npm install gsap @gsap/react`) only the first time a component genuinely needs GSAP-level animation (see the Animation section below).

Skipping this step is the single biggest source of components that "don't match" — the theme tokens and radius scale already encode the whole visual language, so most of the design decisions are made for you before you write a line of JSX.

## The "little 3D" look, concretely

The brief is subtle depth, not glossy skeuomorphism. This codebase already leans on **layered rings and borders** for depth rather than heavy `box-shadow` — e.g. `Card` uses `ring-1 ring-foreground/10` instead of a drop shadow, and `Button` gets its "pressed" feel from `active:translate-y-px` on a flat surface, not from gradients. Follow that same language:

- **Resting elevation**: a soft, short shadow plus a hairline ring — `shadow-sm ring-1 ring-foreground/10` (or `ring-black/5` for very light surfaces). Keep shadow blur small; a huge soft shadow reads as "floating," not "solid."
- **Top highlight for raised surfaces** (buttons, raised cards, toggles): a faint inset light edge suggests a lit top face — `shadow-[inset_0_1px_0_0_theme(colors.white/10%)]` in dark mode, or simply a slightly lighter `border-t` in light mode. Use sparingly — one highlight edge per surface, not on every child.
- **Pressed/active state**: nudge the element down a pixel and drop the highlight — this project already does this via `active:translate-y-px` in `buttonVariants`. Reuse that exact pattern for any new clickable surface (cards acting as buttons, toggles, chips).
- **Hover state**: a small, fast transition (`transition-all` + a shade shift like `hover:bg-primary/80`) rather than a scale or shadow-grow — matches the existing button/card hover feel.
- **Layering between nested surfaces**: give the parent and child slightly different `bg-*` tokens (e.g. card `bg-card` on a `bg-background` page, footer `bg-muted/50` inside a card) instead of shadows to separate them — this project's `CardFooter` does exactly this.
- **What to avoid**: heavy drop shadows, colored glows, gradients across large surfaces, glassmorphism/blur backgrounds, skeuomorphic textures. If a component looks like it needs `backdrop-blur` and a gradient to feel "3D," that's the wrong direction for this codebase — depth here comes from rings, hairline borders, and micro-interactions, not visual noise.

## Responsive layout rules

- Design mobile-first: base classes target the smallest viewport, then layer `sm:` / `md:` / `lg:` / `xl:` for wider layouts. Never ship a component that only looks right at desktop width.
- Prefer Tailwind's container queries (`@container`) for components whose layout should respond to their own wrapper rather than the viewport — this project already does this (`@container/card-header` in `Card`). Reach for this when a component might be dropped into differently-sized parents (a sidebar vs. a full-width section).
- Use `flex`/`grid` with `gap-*` for spacing, not margin chains, so spacing stays consistent when the layout wraps at smaller widths.
- Verify readability at small widths in your head (or in the browser if you can run the dev server): text doesn't overflow, touch targets stay comfortably tappable (`size-8`/`h-8` minimum for icon buttons, matching the existing `size` scale in `button.tsx`), and nothing depends on hover-only affordances for critical actions.

## Icons

Never use emoji, anywhere — not as placeholder icons, not as decoration, not in empty states. This project uses `lucide-react` (already a dependency and already used in `Navbar.tsx`, `Footer.tsx`, `dialog.tsx`, `accordion.tsx`, `dropdown-menu.tsx`) — pull icons from there first. Only hand-write inline `<svg>` when the icon isn't in lucide's set (a custom brand mark, a bespoke illustration). Keep hand-written SVGs using `currentColor` for strokes/fills so they inherit `text-*` color utilities and respond correctly to dark mode, matching how the rest of the UI is theme-driven rather than hardcoded.

## Animation: Tailwind transitions + GSAP, used deliberately

Two tools, two jobs — reach for the cheaper one first, and think before adding either.

- **Plain Tailwind transitions** (`transition-colors`, `transition-all`, `duration-150`/`duration-200`, `ease-out`) are the default for simple single-element state changes: hover, focus, active, disabled. This is already the codebase convention (`Button`'s `transition-all` + `hover:bg-primary/80`, `active:translate-y-px`) and it costs nothing — no JS, no bundle weight, no extra render. Use it for hover/focus color shifts, opacity fades, and press feedback.
- **GSAP** is for what CSS transitions can't express cleanly: multi-element staggers, SVG stroke/path animation, timelines where one step waits for another, scroll-triggered reveals, or a spring/bounce feel. Drive it from the `useGSAP()` hook (`@gsap/react`) inside a `"use client"` component — it auto-cleans up on unmount, which matters across App Router navigations.

### Decide per component — don't default to "animate everything"

Ask whether the animation would *tell the user something happened*, or whether it's just decoration. Build only the former.

- **Yes, animate**: anything the user directly clicks/taps and expects feedback from — like/heart, bookmark/save, follow toggle, tab switches, form submit, toast appear/dismiss, modal/dropdown open-close. This app's `Like`/`Follow`/`SavedSnap` toggles (see backend `CLAUDE.md`) are the prime candidates — a quick icon fill-sweep or scale-pulse on toggle confirms the click landed before the server round-trip even resolves.
- **Maybe, keep it minimal**: first-load entrance for a list of cards — a short, small stagger (roughly 20-40ms between items, 200-300ms each) so a feed doesn't feel static. Only trigger this on true first mount, never re-run it on every cache refresh or re-render of the same list.
- **No, leave it static**: body text, plain informational rows, settings forms, anything read repeatedly rather than acted on. A dashboard feed people scan often gets annoying if it re-animates every visit. If you're unsure whether a component needs animation, that uncertainty is usually the answer — skip it.

### Keep it one system, not a pile of one-offs

- Short, consistent durations: ~150-250ms for micro-interactions (button click, icon toggle), ~300-500ms for entrance/exit (modal, dropdown, toast), ~400-700ms total for a staggered group reveal. Slower than that reads as sluggish, not smooth.
- Reuse one or two eases across the app rather than a bespoke curve per component — e.g. `"power2.out"` for entrances, `"power1.inOut"` for color/opacity crossfades. For the plain-CSS cases, `ease-out` / `ease-in-out` cover the same ground.
- **Color transitions**: for a simple one-directional hover color change, plain Tailwind `transition-colors` is enough — don't reach for GSAP just to fade a background on hover. Reach for GSAP when the color change is part of a larger timeline, e.g. a pulse-and-settle back toward `--primary` on like/save, sequenced together with a scale or icon-fill change — GSAP tweens color strings directly (`gsap.to(el, { backgroundColor: ... })`) and interpolates smoothly even between the theme's oklch-derived colors, which a single CSS transition can't sequence as a there-and-back move.
- **SVG icon animation**: animate the icon's internals — `strokeDashoffset` for a check mark or heart drawing in, `scale` for a quick pop, `fill` for a color sweep — tied to a real state change (liked/unliked, saved/unsaved). Never a decorative loop that plays on its own with no state behind it.
- Respect `prefers-reduced-motion`: gate GSAP entrances/staggers behind `gsap.matchMedia()` (or `window.matchMedia("(prefers-reduced-motion: reduce)")`) and jump straight to the end state for users who've opted out. Near-instant micro feedback (a button press) can stay; multi-step timelines and staggers should not run for these users.

## Component conventions to follow

- **File placement**: reusable primitives with no app-specific logic go in `components/ui/` (matches shadcn's existing set — `accordion`, `avatar`, `badge`, `button`, `card`, `dialog`, `dropdown-menu`, `field`, `input`, `label`, `separator`, `textarea`). Feature-specific composites (a dashboard card, a profile section) go under their feature folder, e.g. `components/Dashboard/CardBox/`, `components/Dashboard/Profile/`, following the CLAUDE.md notes on those folders.
- **Class merging**: always run classes through `cn(...)` so caller-supplied `className` can override defaults via `tailwind-merge`, exactly like every existing `components/ui/*` file does.
- **Variants**: when a component has more than one visual style or size (like `Button`'s `variant`/`size`), use `cva()` with `class-variance-authority` and export the variants function alongside the component, mirroring `buttonVariants` in `button.tsx`.
- **State via data attributes**: expose component state as `data-*` attributes (`data-slot`, `data-size`, `data-state`) and style with `data-[attr=value]:` variants rather than conditional class strings — this is how `Card`'s `size` prop and Base UI's own state attributes are styled throughout this codebase.
- **Primitives**: this project builds interactive components on top of `@base-ui/react` (see `button.tsx`, `dialog.tsx`) rather than raw DOM elements or another headless library — reach for the matching Base UI primitive first for anything needing accessible behavior (dialogs, menus, toggles, accordions).
- **Server vs. client**: only add `"use client"` when the component actually needs interactivity/state/hooks. Purely presentational pieces (a stat tile, a static section) should stay server components so they compose cleanly into the mostly-server-rendered pages described in the root CLAUDE.md.

## Before handing it back

- Does it use only theme tokens/radius scale — no hardcoded hex colors or pixel border-radius?
- Does it hold up from small mobile widths up through desktop?
- Does it work in both light and dark mode without extra `dark:` overrides beyond what the oklch tokens already handle?
- Is every icon from `lucide-react` or a `currentColor` inline SVG — zero emoji?
- Does the depth read as "solid surface with a hairline edge and a soft short shadow," not "glossy floating card"?
- Does it reuse `cn()`, and `cva()` if it has variants, instead of ad hoc conditional className logic?
- Did you actually decide whether this component needs animation, rather than defaulting to either "none" or "animate everything"? If it animates, is it tied to a real state change (click, toggle, open/close), not a self-playing decorative loop?
- Are durations/eases consistent with the rest of the app's feel, and does anything beyond a simple hover/focus transition degrade gracefully for `prefers-reduced-motion`?
