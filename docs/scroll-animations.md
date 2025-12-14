# Scroll animation hooks (GSAP + ScrollTrigger)

This project is organized so each section owns its own ScrollTrigger/timeline definition.

## Reduced motion

All animation entry points accept `{ reducedMotion }`.

- When `prefers-reduced-motion: reduce` is enabled, modules avoid motion/blur/depth shifts.
- Triggers are killed in `src/main.js` after initial styles are applied.

## Section contracts / hooks

### Hero blur transition

- Section: `[data-section="hero"]`
- Background layer: `[data-hero-bg]`
- Foreground content: `[data-hero-content]`

Animation: scroll-scrubbed blur + slight scale on background while hero content fades up/out.

Implementation: `src/animations/hero.js`

### System panels emerging from depth

- Section: `[data-section="system"]`
- Panels: `[data-system-panel]`

Animation: panels start pushed back in Z + blurred; on scroll into view they lift forward (z/y/rotateX) and sharpen.

Implementation: `src/animations/systemPanels.js`

### Secondary Services data lines

- Section: `[data-section="secondary-services"]`
- SVG paths: `[data-data-line]`
- Labels container: `[data-secondary-labels] .chip`

Animation: SVG stroke draw (dashoffset) + label fade/blur-in.

Implementation: `src/animations/secondaryServices.js`

### Engagement modules focus/dim interaction

- Section: `[data-section="engagement"]`
- Modules: `[data-engagement-module]`

Animation: as each module hits the focus band, it becomes fully opaque/sharp/scale=1 while others dim and slightly blur.

Implementation: `src/animations/engagementModules.js`

### Network outro slow-down + fade

- Section: `[data-section="network"]`
- Frame: `[data-network-frame]`
- Node container: `[data-network-nodes]`

Animation: scroll-scrubbed node drift with an ease-out “slowdown” near the end, plus fade/blur of the network frame.

Implementation: `src/animations/networkOutro.js`
