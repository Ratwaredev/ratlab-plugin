# Game visual effects

Start from the action's gameplay meaning: direction, source, target, impact, and duration should read at a glance. Match the project's palette, camera, and rendering scale. Use layered timing and motion rather than a static glow; make the effect communicate hit timing and whether the world changed.

Keep particle counts bounded, update effects with delta time, and clean up expired objects. Verify against the actual scene and gameplay camera so effects do not hide the player, target, or important terrain. Preserve readability when layering flashes or bloom.
