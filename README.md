# Alessandro Martinolli — Portfolio

Personal portfolio site. Mobile-first, clean editorial design, with a parallax
hero and scroll-reveal sections. Built with React + Vite.

## Run locally

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Vite prints a local URL (usually http://localhost:5173). Open it in your
browser. Edits hot-reload automatically.

## Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # serves the built site locally to check it
```

## Deploy

The `dist/` folder is a static site — host it anywhere:

- **Vercel / Netlify**: connect the repo, or drag-and-drop the `dist/` folder.
  Build command `npm run build`, output directory `dist`.
- **GitHub Pages**: push `dist/` to a `gh-pages` branch, or use an action.

## Project structure

```
index.html            App shell, loads the Inter font
src/
  main.jsx            React entry point
  App.jsx             The whole site (all sections + hooks)
  index.css           Reset + base styles
  assets/             Project screenshots
    digibro.jpg
    giulio.jpg
    becrew.jpg
```

## Editing content

All content lives in data arrays near the top of `src/App.jsx`:

- `WEB` — web development projects (Digibro, Giulio Pipolo, BeCrew)
- `CODE` — engineering / open-source projects (GitHub repos)
- `EXP` — work experience
- `SKILLS` — skills and languages

To swap a screenshot, replace the matching file in `src/assets/` (keep the same
filename), or drop in a new one and update the import at the top of `App.jsx`.

## Notes

- Design tokens (colors) are in the `C` object at the top of `App.jsx`.
- Animations respect `prefers-reduced-motion`.
- Nav uses smooth in-page scrolling via `scrollToId`.
