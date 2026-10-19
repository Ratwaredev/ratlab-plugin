# Game QA

Use the project's existing test and launch commands. Start the game in the same mode the user will run, exercise the requested interactions, inspect runtime errors, and capture real output before calling visual work complete.

For a browser game with a local HTTP preview, the bundled helper supports:

```sh
node ratlab.mjs capture http://127.0.0.1:PORT --out artifacts/playtest.png
node ratlab.mjs fps http://127.0.0.1:PORT --seconds 5
```

Run those commands from this skill's `scripts` directory, or use its absolute path. The helper requires `playwright-core` and local Chrome, Chromium, or Edge. Set `RATLAB_BROWSER_EXECUTABLE` if browser auto-discovery fails. It measures browser animation-frame cadence, not engine-internal performance. Do not install dependencies just to use the helper unless the project owner wants browser checks.
