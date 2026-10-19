# Game animation

Inspect the project's art scale, coordinate system, and animation loop before editing. Build motion around a clear silhouette and readable anticipation, action, and recovery. Tie cycles to elapsed time rather than render count, and keep movement responsive when frames are skipped.

Use the existing animation format where practical. For procedural or code-drawn characters, keep pose parameters and motion curves reusable so directions and states stay consistent. Check the result in motion at the intended game scale; static code review cannot establish animation quality. Avoid adding an animation framework unless the project needs it.
