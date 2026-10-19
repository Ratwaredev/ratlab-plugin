# Game implementation

Treat the requested player experience as acceptance criteria. Inspect the project's engine, input, rendering, and test setup first. Reuse working systems and keep the first slice small enough to finish and play.

Prioritize responsive controls, readable silhouettes, clear feedback, and a complete playable loop over feature count. Prefer authored shapes, procedural drawing, or existing assets that fit the art direction over placeholder primitives. Keep implementation native to the project; RatLab does not require a framework or runtime.

Keep artistic direction, visual priorities, and final integration with the model the user selected. GameDevBench finds game-development tasks involving 2D graphics harder than gameplay tasks, so do not hand the defining visual identity to a weaker helper by default.

Use cheaper subagents only for independent, bounded work after the owner has fixed the brief and interfaces: requirement checklists, isolated bug hunts, test scripts, content tables, or asset metadata. State the exact files and deliverable, give them the same short project brief, and ask for findings rather than parallel rewrites of shared files. Do not start agents automatically. Spawn them only when their likely benefit exceeds coordination, review, merge, and context costs. The lead owns the integration and checks the result.

When work must move between Claude Code and Codex, use the host-native plugin/skill installation in each harness and keep one concise project handoff in the repository (goal, constraints, current state, files, next action). This package shares guidance and scripts across hosts; it does not connect live conversations or let one harness delegate to the other. Do not claim cross-harness coordination unless an installed connector actually provides it.

Verify the requested interactions in the running game when possible. For visual work, inspect an early render while changes are still cheap, then inspect the finished result.
