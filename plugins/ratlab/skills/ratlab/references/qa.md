# Game QA

Use the project's existing test and launch commands. Start the game in the same mode the user will run, exercise the requested interactions, inspect runtime errors, and capture real output before calling visual work complete. A successful build or a static code read is not evidence that the game was played.

Check two things separately:

- Requirements and behavior: launch, controls, combat/interactions, autonomous behavior, failures/restart, and any requested device mode.
- Perceived quality: silhouette readability, visual hierarchy, palette/style, animation, spatial layout, effects, and overall completeness. Compare an early screenshot and a final screenshot where possible.

For each requested interaction, record pass, fail, or not checked. Report actual browser/engine errors separately from tooling or extension noise. If the browser helper is unavailable, use an already available browser or engine workflow; do not spend tokens installing a new test stack unless the user asks. State the exact checks that remain unverified.

For a browser game with a local HTTP preview, the bundled helper supports:

```sh
node ratlab.mjs capture http://127.0.0.1:PORT --out artifacts/playtest.png
node ratlab.mjs fps http://127.0.0.1:PORT --seconds 5
```

Run those commands from this skill's `scripts` directory, or use its absolute path. The helper requires `playwright-core` and local Chrome, Chromium, or Edge. Set `RATLAB_BROWSER_EXECUTABLE` if browser auto-discovery fails. It measures browser animation-frame cadence, not engine-internal performance. Do not install dependencies just to use the helper unless the project owner wants browser checks.
