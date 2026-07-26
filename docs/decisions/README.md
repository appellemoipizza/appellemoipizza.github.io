# Decisions

One file per decision, [MADR](https://adr.github.io/madr/) format, numbered in
order: `0001-short-title.md`.

Copy `0000-template.md`. Keep each one short. A decision that needs three pages
is two decisions.

Record a decision when you chose between real alternatives and someone could
reasonably have chosen differently. Do not record what the code already says.

Two fields matter more than the rest:

- **reversibility.** A two-way door is cheap to undo: decide fast, write two
  lines, move on. A one-way door is costly or impossible to undo (public APIs,
  data schemas, pricing, brand, core UX patterns users learn): write the
  tradeoffs out and get an explicit go first.
- **revisit-trigger.** A metric, a date, or a condition that would reopen this.
  Without one, a decision quietly becomes an unquestioned default.
