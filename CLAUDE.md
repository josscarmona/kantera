# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build (use to validate TypeScript + no render errors)
npm run lint     # ESLint
```

There are no tests. Use `npm run build` to verify correctness — it catches TypeScript errors and Next.js prerender failures.

## Architecture

This is a **single-page marketing site** for Kantera. All content lives in one file: `src/app/page.tsx`.

**Key constraint: Server Components only.** There are no Client Components (`"use client"`). This means:
- No `useState`, `useEffect`, or any React hooks
- No inline event handlers (`onClick`, `onMouseOver`, etc.) — they cause a prerender error
- All interactivity (scroll effects, hover states) must be CSS-only or via `<Script strategy="afterInteractive">`
- The scroll-triggered nav state uses `classList.add/remove` inside a `<Script>` block

**Styling approach:** All CSS lives in a single `<style>` JSX block at the top of the component. Tailwind v4 is imported in `globals.css` (`@import "tailwindcss"`) but is not actively used — all styles are written as plain CSS classes and inline styles.

**Page structure** (`src/app/page.tsx`):
- Data arrays defined outside the component: `pipelineNodes`, `truthStatements`, `properties`
- Single `<style>` block with all CSS classes, keyframes, and responsive rules
- `<Script id="nav-scroll">` for scroll-based nav border
- Nav (fixed, always white `#FFFFFF`)
- Hero (`#F8F9FB` bg, white sections below use dark `#070907`/`#0F110F`)
- Section 2 — Pipeline (`#sistema`, dark)
- Section 3 — Why Now (`#por-que`, dark with Unsplash image)
- Section 4 — Standard (`#estandar`, dark)
- Section 5 — CTA (`#cta`, `#17472C` green)
- Footer

**Font:** Poppins via `next/font/google`, weights 300/400/500/600/700, CSS variable `--font-poppins`.

**Images:** `next/image` with `fill` prop. Unsplash is allowlisted in `next.config.ts`.

**Brand colors:** `#070907` (near-black bg), `#4ED067` (green accent), `#1E874C` (deep green), `#FFFFFF` (white text on dark).

**Animations:** All keyframes defined in the `<style>` block — `fadeInUp`, `gradientShift`, `float1/2/3`, `shimmerCard`. The hero headline uses `background-clip: text` with an animated gradient. The 3-card hero visual uses independent float keyframes that embed the rotation to avoid transform conflicts.

**Responsive breakpoints:** `≤1024px` hides the hero card stack; `≤768px` applies mobile layout (stacked sections, smaller type, single-column grids).
