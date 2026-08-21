---
status: accepted
date: 2026-08-21
reversibility: two-way door
revisit-trigger: Thomas explicitly wants a different entry experience
supersedes: none
superseded-by: none
---

# 0002. Keep the interactive visit card as the front door

## Context and problem statement

The first Astro publishing implementation replaced Thomas's existing one-screen interactive visit card with a conventional content homepage. That preserved the portfolio's visual palette but removed the authored object interaction, simplicity, 3D rotation, cursor trail and the deliberate feeling of arriving at a personal card before entering a body of work.

The publishing system is useful, but replacing the card solved the wrong problem. The card had already been intentionally designed and was meant to become the doorway into the larger personal research/creator surface.

## Considered options

- Replace the card with the publishing homepage at `/`.
- Recreate some card motifs inside a conventional homepage.
- Preserve the original card experience at `/` and place the publishing hub behind it at `/home`.

## Decision outcome

Chosen: **preserve the original card experience at `/` and put the publishing hub at `/home`**.

The original card's interaction model is part of the product identity, not legacy decoration. The Astro site must reproduce its 3D tilt, grab-to-flip behavior, cursor/pixel trail, dither image swaps, typography, physical-object proportions and restrained one-screen composition. A quiet entry affordance may lead to `/home`, but the publishing system must not visually swallow the card.

### Value

The site can grow into writing, films, work and resources without sacrificing the piece of identity Thomas had already authored carefully.

### Cost

The root route is intentionally more interactive than the otherwise static/minimal publishing surface, and the same visual assets need to be included in the Astro public build.

### Risk

A very subtle entry affordance may be missed by some visitors. That is preferable to turning the card into a navigation dashboard; revisit only with evidence from real use or explicit human direction.

### Consequences

- Good: the original first impression and interaction survive intact.
- Good: the publishing architecture still exists and can grow independently behind `/home`.
- Good: future agents have an explicit rule preventing accidental simplification of the entry artifact.
- Bad: `/` and `/home` intentionally have different information density and interaction character.

## More information

The preserved original source remains in root `index.html`, `style.css`, `script.js` and `assets/`. The deployed Astro implementation is `src/pages/index.astro`; the publishing hub is `src/pages/home.astro`.
