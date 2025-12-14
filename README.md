# Cinematic Agentic AI Website

A production-ready, single-page cinematic narrative built with Vite, React, TypeScript, and GSAP.

## What’s in here

- Hero canvas network (deterministic node field + progressive reveal)
- Narrative sections (depth layout + 3D/perspective styling)
  - `HeroSection`
  - `CoreAgenticAI`
  - `SystemPanels`
  - `SecondaryServices`
  - `EngagementModels`
  - `NetworkOutro`
  - `Stabilization`
- GSAP + ScrollTrigger orchestration with reduced-motion support
- Responsive + accessibility polish (fluid type, clamp-based spacing, focus-visible)

## Development

Prereqs: Node.js 18+

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Lint

```bash
npm run lint
```

## Documentation

- `docs/scroll-animations.md`
- `docs/responsive-polish.md`

## Project structure

```
src/
  animations/          # GSAP modules per section
  components/          # Narrative + layout primitives
    layout/            # Page/Section/Panel
  hooks/               # Scroll progress + cinematic animation orchestration
  styles/              # Global tokens + cinematic + responsive layers
  types/               # Type definitions (GSAP/ScrollTrigger)
  utils/               # Small utilities (e.g. reduced-motion)
  App.tsx
  main.tsx
```
