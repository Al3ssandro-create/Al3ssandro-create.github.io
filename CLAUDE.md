# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site: Vite + React 18 + TypeScript, styled with NextUI + Tailwind + styled-components, animated with framer-motion, routed with react-router-dom. Deployed to GitHub Pages.

## Commands

- `npm run dev` — local dev server (Vite)
- `npm run build` — runs `tsc && vite build`; type errors fail the build
- `npm run lint` — `eslint . --ext ts,tsx --max-warnings 0`; **zero warnings allowed**
- `npm run deploy` — publishes `dist/` to GitHub Pages via `gh-pages`

## Workflow

- Commit straight to `main` — no branch/PR flow.
- `npm run lint` and `npm run build` must both be clean before `npm run deploy`.

## Gotchas

- TypeScript is strict with `noUnusedLocals`/`noUnusedParameters` — unused imports or vars break `tsc`/`build`.
- `tailwind.config.js` `content` only globs `./src/**/*.{html,js}` — it does **not** scan `.tsx`/`.jsx`. Tailwind utility classes added directly in components may not be generated. Prefer NextUI props / styled-components for component styling, or update the glob if adding Tailwind classes in `.tsx`.
