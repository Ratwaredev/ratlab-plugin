# RatLab plugin

RatLab is one plugin package. Install it once in Claude Code, or once in Codex; its game workflows and helper scripts are bundled inside that plugin. Claude Code and Codex keep their own plugin installation, model, permissions, context, and subagent controls, so there is no single shared installation across the two products.

The package contains one entry skill. It reads only the reference for the current task, keeping animation, VFX, world design, QA, and optional Graphify guidance out of unrelated work. A small browser script is included for local screenshot/FPS checks. There is no RatLab app, router, MCP server, or separate connector to configure.

The root `plugin.json` is the portable manifest used by Codex; `.claude-plugin/plugin.json` is the Claude Code manifest. Both point at the same bundled skill. The package is prepared for native plugin installation; it is not published to either platform's marketplace.

## Optional local browser checks

From the plugin's `skills/ratlab/scripts/` directory:

```sh
node ratlab.mjs capture http://127.0.0.1:4179 --out artifacts/playtest.png
node ratlab.mjs fps http://127.0.0.1:4179 --seconds 5 --target 60
```

These checks require `playwright-core` and a local Chrome, Chromium, or Edge executable. Set `RATLAB_BROWSER_EXECUTABLE` when it is outside the standard path. Nothing is downloaded, and the helper only opens local game URLs. FPS measures browser animation-frame cadence, not engine-internal update time. Use Graphify separately only when it is already installed and a codebase map would reduce broad file reads.
