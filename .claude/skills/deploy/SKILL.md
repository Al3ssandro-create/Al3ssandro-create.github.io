---
name: deploy
description: Build and publish the site to GitHub Pages. Runs lint, then build, then gh-pages deploy. User-triggered only.
disable-model-invocation: true
---

Deploy the portfolio site to GitHub Pages. Run these in order, stopping if any step fails:

1. `npm run lint` — must pass with zero warnings (`--max-warnings 0`). If it fails, report the errors and stop; do not deploy.
2. `npm run build` — `tsc && vite build`. If type errors or build errors occur, report and stop.
3. `npm run deploy` — publishes `dist/` to GitHub Pages via `gh-pages`.

After deploying, confirm the deploy command succeeded and remind the user the published site is `Al3ssandro-create.github.io`.
