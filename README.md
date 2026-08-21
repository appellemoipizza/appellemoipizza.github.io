# Thomas Vezzani — personal lab

Personal site and research journal. `/` is the interactive visit card; `/home` is the journal.

Astro static build. Notes and projects are Markdown content collections in `src/data/` — no database, no CMS.

## Run

```bash
npm install
npm run dev
```

## Verify

```bash
npm run check
```

## Publish a post

1. Add a Markdown file in `src/data/notes/`.
2. Optionally add an image under `public/` and set `image: /path/to/image`.
3. Keep `draft: true` while writing.
4. Set `draft: false` when it's ready to be public.

## Deploy

Pushing to `main` builds and deploys via `.github/workflows/deploy.yml` to GitHub Pages.
