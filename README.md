# Thomas Vezzani — personal lab

Personal publishing site for software, AI systems, experiments, films and reusable resources.

The public site is an Astro static build. `/` is the authored interactive visit card; `/home` is a quiet research journal. Git is the CMS: projects and notes are Markdown content collections; there is no database, account system or external CMS.

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

## Publish a post

The intended workflow is deliberately small:

1. decide that something is worth documenting;
2. add one Markdown file in `src/data/notes/`;
3. optionally add one image under `public/` and set `image: /path/to/image`;
4. keep `draft: true` while writing;
5. run `npm run check`;
6. publish only after explicit human approval by changing the draft to public.

Required note fields are title, summary, date and kind. Tags are optional. Images are optional; text-only notes are first-class and should still look complete.

See `EDITORIAL.md` for the Millie → signal → draft → review → publish contract and publication firewall. `docs/POST_TEMPLATE.md` is the internal drafting/checklist template for technical posts.

## Deployment

`.github/workflows/deploy.yml` uses Astro's official GitHub Pages action when `main` changes and records a live-site smoke status on the deployed commit.

This repository uses the special `appellemoipizza.github.io` Pages URL, so Astro does not need a repository `base` path.

## Documentation

- `EDITORIAL.md` — public content, Millie handoff and disclosure rules
- `docs/POST_TEMPLATE.md` — safe technical-post drafting checklist
- `INSTRUCTIONS.md` — how this repository is worked on
- `AGENTS.md` — shared agent behavior
- `ROADMAP.md` — what happens next
- `docs/decisions/` — why structural choices were made
