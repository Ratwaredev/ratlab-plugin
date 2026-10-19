# RatLab plugin marketplace

One RatLab plugin package for Claude Code and Codex. The same source repository carries each host's marketplace catalog.

- Claude Code catalog: .claude-plugin/marketplace.json
- Codex catalog: .agents/plugins/marketplace.json
- Plugin package: plugins/ratlab/
- No RatLab frontend, router, MCP server, model selector, background process, or RatLab API.
- The host agent controls tools, model, permissions, and subagents.

This skills-only package makes no calls to a RatLab or model API. Activating a skill adds instructions to the host model's normal context and uses its normal plan or API billing. The optional screenshot/FPS script runs locally with Node, Playwright, and an installed browser.

## Claude Code

Add this GitHub marketplace in Claude Code Desktop's plugin browser, or run /plugin marketplace add Ratwaredev/ratlab-plugin and install ratlab@ratlab-tools.

## Codex

Add the same GitHub source to Codex's plugin marketplace, then install RatLab from the Plugins Directory.
