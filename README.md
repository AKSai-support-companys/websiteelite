# SPA Foundation

A modern single-page application foundation built with Vite, React, TypeScript, and GSAP, featuring a sophisticated design system and scroll animation capabilities.

## 🚀 Features

- **Modern Tech Stack**: Vite + React 18 + TypeScript
- **Design System**: Deep midnight background palette with electric cyan accents
- **Typography**: Modern wide-tracked sans-serif fonts via @font-face
- **Layout Components**: Shared Page, Section, and Panel shells
- **Scroll Utilities**: GSAP ScrollTrigger integration and utility hooks
- **Desktop-First**: Optimized for desktop with responsive design
- **Strict Linting**: ESLint + Prettier configuration

## 🎨 Design System

### Color Palette

**Deep Midnight Backgrounds:**
- Midnight: `#0a0a0f`
- Midnight Light: `#1a1a2e`
- Midnight Lighter: `#16213e`
- Midnight Dark: `#050508`

**Electric Cyan Accents:**
- Cyan Primary: `#00d9ff`
- Cyan Secondary: `#00bcd4`
- Cyan Light: `#4dd0e1`
- Cyan Glow: `rgba(0, 217, 255, 0.3)`

### Typography System

**Font Families:**
- Primary: Inter, SF Pro Display
- Monospace: JetBrains Mono

**Font Weights:** 300-800 range
**Wide Letter Spacing:** 0.05em - 0.15em
**Line Heights:** Tight (1.25) to Loose (2.0)

### Layout Components

#### Page
Container component with configurable max-width, padding, and background options.

```tsx
import { Page } from './components/layout';

<Page maxWidth="xl" padding="md" background="primary">
  {/* Content */}
</Page>
```

#### Section
Section wrapper with flexible spacing and background options.

```tsx
import { Section } from './components/layout';

<Section padding="xl" background="transparent" minHeight="screen">
  {/* Section content */}
</Section>
```

#### Panel
Content container with multiple visual variants.

```tsx
import { Panel } from './components/layout';

<Panel variant="glass" padding="lg" borderRadius="xl" shadow>
  {/* Panel content */}
</Panel>
```

**Panel Variants:**
- `default` - Subtle background with border
- `glass` - Glass morphism effect with blur
- `glow` - Cyan glow effect
- `solid` - Opaque background

## 🎯 Scroll Utilities

### useScrollSync

Hook for GSAP ScrollTrigger integration with fallback scroll tracking.

```tsx
import { useScrollSync } from './hooks/useScrollSync';

const { progress, trigger } = useScrollSync({
  trigger: 'body',
  start: 'top top',
  end: 'bottom bottom',
  scrub: 1,
  onUpdate: (progress) => {
    console.log('Scroll progress:', progress);
  },
});
```

### useScrollProgress

Simple scroll progress tracking hook.

```tsx
import { useScrollProgress } from './hooks/useScrollProgress';

const { progress, scrollY, scrollDirection, isScrolling } = useScrollProgress();
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   └── layout/
│       ├── Page.tsx
│       ├── Section.tsx
│       ├── Panel.tsx
│       └── index.ts
├── hooks/
│   ├── useScrollSync.ts
│   └── useScrollProgress.ts
├── styles/
│   ├── globals.css
│   └── fonts.css
├── App.tsx
└── main.tsx
```

## 🎨 CSS Architecture

### CSS Custom Properties

The design system uses CSS custom properties (CSS variables) for:

- **Colors**: Midnight palette and cyan accents
- **Typography**: Font families, sizes, weights, and spacing
- **Spacing**: Comprehensive spacing scale (4px to 128px)
- **Depth**: Z-index layers for proper layering
- **Shadows**: Multiple shadow levels including glow effects
- **Border Radius**: Consistent radius scale

### Global Styles

- Modern CSS reset with box-sizing reset
- Smooth scrolling behavior
- Antialiased font rendering
- Custom scrollbar styling
- Selection color theming
- Focus states for accessibility

## 🔧 Configuration

### TypeScript

Strict TypeScript configuration with:
- ES2020 target
- React JSX transform
- Strict mode enabled
- No unused variables/parameters

### ESLint

Extended ESLint configuration with:
- TypeScript support
- React hooks rules
- Strict code quality rules
- No unused variables enforcement

### Prettier

Consistent code formatting with:
- 2-space indentation
- Single quotes
- Trailing commas
- 80-character line width

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open browser to `http://localhost:5173`

## 📦 Dependencies

### Core
- **react**: ^18.2.0
- **react-dom**: ^18.2.0

### Animation
- **gsap**: ^3.12.2

### Development
- **typescript**: ^5.2.2
- **vite**: ^5.0.8
- **@vitejs/plugin-react**: ^4.2.1
- **eslint**: ^8.55.0
- **prettier**: ^3.1.1

## 🎯 Design Principles

- **Desktop-First**: Optimized for large screens with responsive breakpoints
- **Wide Tracking**: Generous letter-spacing for modern aesthetic
- **Depth Layers**: Proper z-index system for layering
- **Accessibility**: Focus states and semantic HTML
- **Performance**: Optimized animations and lazy loading ready

## 🔮 Future Enhancements

- [ ] Full GSAP ScrollTrigger integration
- [ ] Animation presets and patterns
- [ ] Responsive design system expansion
- [ ] Dark/light theme variants
- [ ] Component storybook
- [ ] Testing suite
- [ ] CI/CD pipeline

## 📄 License

MIT License - see LICENSE file for details.
