---
name: ratlab
description: Use RatLab's optional game-development and visual-QA workflows when building, animating, or testing a game.
---

# RatLab game workflows

The host agent owns the work: use its native tools, model, permissions, context, and subagents. RatLab adds optional guidance and small scripts; it never starts another model or changes the host's behavior.

Load only the reference needed for the current request:

- Game implementation or prototype: [references/game-design.md](references/game-design.md)
- Character or procedural animation: [references/animation.md](references/animation.md)
- Spells, impacts, trails, or particles: [references/vfx.md](references/vfx.md)
- Regions, procedural spaces, or autonomous world behavior: [references/worldbuilding.md](references/worldbuilding.md)
- Playtesting, screenshots, or frame timing: [references/qa.md](references/qa.md)
- Benchmarking a model, skill, or agent team: [references/benchmarking.md](references/benchmarking.md)
- Large or unfamiliar codebase where broad file reads are wasteful: [references/codebase-map.md](references/codebase-map.md)

Skip unrelated references. For simple local edits, work directly without loading RatLab guidance. Verify important visual changes in the running game when the requested environment is available; state clearly when only code-level checks were possible.
