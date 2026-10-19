# Optional codebase map

Use this only when repository structure or dependency flow is difficult to understand from focused searches. Check whether `graphify` is installed. If unavailable, continue with the host's normal search and file-reading tools; do not install it automatically.

When useful, build a code-only index and ask a narrow question with a small budget:

```sh
graphify extract . --code-only --max-workers 2 --out .
graphify query "Where is game input mapped to movement?" --graph graphify-out/graph.json --budget 400
graphify explain PlayerController --graph graphify-out/graph.json
graphify path PlayerController WorldCollision --graph graphify-out/graph.json
```

Treat results as navigation hints and verify important claims in source files. Do not index or retrieve the graph for simple local edits. Graphify's code-only index uses local syntax analysis and does not call a model.
