# RatLab plugin marketplace

A single installable RatLab plugin for Claude Code and the Codex plugin format.

- Claude Code marketplace catalog: .claude-plugin/marketplace.json
- Cross-host package: plugins/ratlab/
- No RatLab frontend, router, MCP server, model selector, or background process.
- The host agent controls tools, model, permissions, and subagents.

## Install in Claude Code

Add this GitHub marketplace in Claude Code Desktop's plugin browser, or run /plugin marketplace add Ratwaredev/ratlab-plugin and install ratlab@ratlab-tools.

## Codex / ChatGPT

plugins/ratlab/ is the universal skills-only plugin package. Upload its ZIP through the OpenAI Plugins page to submit the public listing. It requires developer identity verification and acceptance of the dashboard attestations before review and publication.
