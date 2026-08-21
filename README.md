# Thomas Vezzani — personal lab

Personal publishing site for software, AI systems, experiments, films and reusable resources.

The public site is an Astro static build. Git is the CMS: projects and notes are Markdown content collections; there is no database, account system or external CMS.

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

`.github/workflows/deploy.yml` uses Astro's official GitHub Pages action when `main` changes.

This repository uses the special `appellemoipizza.github.io` Pages URL, so Astro does not need a repository `base` path.

The legacy root `index.html`, `style.css`, `script.js` and `assets/` are intentionally retained as a safe fallback until the GitHub Pages source is confirmed to be **GitHub Actions** and the Astro deployment is verified. Once that is confirmed, they can be removed.

## Documentation

- `EDITORIAL.md` — public content and Millie handoff
- `INSTRUCTIONS.md` — how this repository is worked on
- `AGENTS.md` — shared agent behavior
- `ROADMAP.md` — what happens next
- `docs/decisions/` — why structural choices were made
