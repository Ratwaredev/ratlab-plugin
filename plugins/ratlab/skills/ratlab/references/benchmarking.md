# Benchmarking game-development agents

Load this reference only when comparing models, skills, prompts, or agent teams. It is guidance for an experiment, not a request to spawn agents.

## What published evaluations support

- [GameDevBench](https://github.com/waynchi/gamedevbench) evaluates 333 Godot tasks across gameplay, 2D/3D graphics and animation, and UI. Its published results report that graphics tasks are harder than gameplay tasks (33.0% vs. 51.4% success in the reported analysis) and that visual feedback raised GPT-5.4 from 41.1% to 52.0%. Its current repository leaderboard reports Claude Opus 5.5 at 68.2% with high effort and 70.6% with xhigh; GPT-6.1 Sol xhigh is 70.0%. These are specific benchmark runs, not a universal ranking of every game task.
- [AA-3D](https://artificialanalysis.ai/methodology/aa-3d) compares single-page interactive 3D scenes using identical briefs and conditions, excludes non-running work, and ranks blind pairwise human preferences. It also reports tokens, turns, tools, and cost. Its 3D-scene results do not directly measure a full 2D game or prove which model is best for every game-dev task.
- [BlenderWorld](https://blenderworld.github.io/) separates task-specific binary requirement checks from eight visual-quality dimensions and scores both. It uses multiple task-relevant views and reports turns, tools, and output tokens. It is a 3D creation benchmark, so borrow its evaluation design rather than treating its model ranking as a 2D-game ranking.

## Run a fair comparison

1. Give every candidate the same brief, starting files, environment, time/turn limits, and verification access. For a skill test, change only skill availability. For a team test, record each agent, model, effort, and role.
2. Do not coach one candidate or pass one candidate's discoveries to another. Freeze every artifact before review. If feedback/revision is part of the product being tested, give every candidate the same number and kind of feedback rounds.
3. Use blinded pairwise human preference for overall look and feel where possible; a single reviewer can give directional feedback, not a reliable leaderboard. Separately score each requested behavior with pass/fail/not checked and score visual dimensions such as silhouette, style/palette, animation, composition/layout, lighting/materials or effects, and completeness.
4. Record resource cost for the whole team: model/effort per agent, available token or quota usage, elapsed time, turns, tool calls, and review/merge work. A cheaper subagent is useful only if its quality gain or saved lead effort exceeds those costs.
5. Preserve the screenshots, logs, prompts, environment, and per-requirement results. Repeat across more than one brief before changing default model or team policy.

For a quick local trial, call the result a pilot. Do not claim the skill caused an improvement from one run per condition or when one candidate received extra feedback.
