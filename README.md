# Thomas Vezzani — personal lab

Thomas's interactive visit card is the public front door. Behind it is a static publishing system for software, AI systems, experiments, films and reusable resources.

The public site is an Astro static build. Git is the CMS: projects and notes are Markdown content collections; there is no database, account system or external CMS.

## Public structure

- `/` — the original interactive visit card: 3D tilt, grab-to-flip, cursor trail, dither swaps and personal identity
- `/home` — publishing hub
- `/work` — selected project case studies
- `/notes` — essays, build notes and films
- `/lab` — smaller experiments
- `/resources` — reusable public assets when they earn their way there
- `/about` — longer personal context

The card is not a splash screen waiting to be replaced. It is the authored entry experience. The publishing system is deliberately layered behind it.

## Run

```bash
npm install
npm run dev
```

## Verify

```bash
npm run check
```

`npm run check` runs Astro diagnostics and a full static build.

## Publish content

- selected work: `src/data/projects/*.md`
- notes / essays / films / build logs: `src/data/notes/*.md`
- keep unfinished writing as `draft: true`; draft entries are excluded from indexes, routes and RSS
- publishing requires explicit human approval before changing a draft to public

See `EDITORIAL.md` for the Millie → signal → draft → review → publish contract.

## Deployment

`.github/workflows/deploy.yml` uses Astro's official GitHub Pages action when `main` changes, then verifies the real public homepage and writes a `pages/live-smoke` commit status.

This repository uses the special `appellemoipizza.github.io` Pages URL, so Astro does not need a repository `base` path.

The original root `index.html`, `style.css`, `script.js` and `assets/` remain as a preserved source/reference for the authored visit-card experience. The Astro implementation at `src/pages/index.astro` is the deployed version.

## Documentation

- `EDITORIAL.md` — public content and Millie handoff
- `INSTRUCTIONS.md` — how this repository is worked on
- `AGENTS.md` — shared agent behavior
- `ROADMAP.md` — what happens next
- `docs/decisions/` — why structural choices were made
