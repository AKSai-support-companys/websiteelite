import { useEffect, useMemo, useRef } from 'react';

interface HeroSectionProps {
  scrollProgress: number;
}

interface Node {
  baseX: number;
  baseY: number;
  seedA: number;
  seedB: number;
  phase: number;
}

function hash2i(ix: number, iy: number, seed: number) {
  let h = Math.imul(ix, 374761393) ^ Math.imul(iy, 668265263) ^ Math.imul(seed, 2147483647);
  h = (h ^ (h >>> 13)) >>> 0;
  h = Math.imul(h, 1274126177) >>> 0;
  return (h & 0xffffffff) / 4294967296;
}

function fade(t: number) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function noise2(x: number, y: number, seed: number) {
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const xf = x - x0;
  const yf = y - y0;

  const v00 = hash2i(x0, y0, seed);
  const v10 = hash2i(x0 + 1, y0, seed);
  const v01 = hash2i(x0, y0 + 1, seed);
  const v11 = hash2i(x0 + 1, y0 + 1, seed);

  const u = fade(xf);
  const v = fade(yf);
  const x1 = lerp(v00, v10, u);
  const x2 = lerp(v01, v11, u);
  return lerp(x1, x2, v) * 2 - 1;
}

function createPRNG(seed: number) {
  let s = seed >>> 0;
  return () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return (s >>> 0) / 4294967296;
  };
}

export function HeroSection({ scrollProgress }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const progressLabel = useMemo(() => `${Math.round(scrollProgress * 100)}%`, [scrollProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let ctx: CanvasRenderingContext2D | null = null;
    let dpr = 1;
    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    let linkDist = 240;
    let wander = 24;
    let rafId = 0;
    let running = false;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reducedMotion = motionQuery.matches;

    const drawBackground = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, w, h);
      const g = ctx.createRadialGradient(w * 0.5, h * 0.35, 0, w * 0.5, h * 0.35, Math.max(w, h));
      g.addColorStop(0, 'rgba(10, 14, 22, 1)');
      g.addColorStop(1, 'rgba(5, 7, 11, 1)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      const vignette = ctx.createRadialGradient(
        w * 0.5,
        h * 0.5,
        Math.min(w, h) * 0.2,
        w * 0.5,
        h * 0.5,
        Math.max(w, h) * 0.7,
      );
      vignette.addColorStop(0, 'rgba(0,0,0,0)');
      vignette.addColorStop(1, 'rgba(0,0,0,0.55)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);
    };

    const nodePosition = (n: Node, t: number) => {
      const time = t * 0.000045;

      const ox = noise2(n.baseX * 3.2 + time, n.baseY * 3.2 + 17.2, n.seedA);
      const oy = noise2(n.baseX * 3.2 - time * 0.93, n.baseY * 3.2 + 93.4, n.seedB);

      const sx = Math.sin(time * 1.27 + n.phase) * 0.4;
      const sy = Math.sin(time * 1.11 + n.phase * 1.3) * 0.4;

      return {
        x: n.baseX * w + (ox + sx) * wander,
        y: n.baseY * h + (oy + sy) * wander,
      };
    };

    const drawLinks = (positions: Array<{ x: number; y: number }>, t: number) => {
      if (!ctx) return;

      const maxD = linkDist;
      const maxD2 = maxD * maxD;
      const flow = reducedMotion ? 0 : t * 0.02;

      ctx.lineCap = 'round';
      ctx.globalAlpha = 1;

      for (let i = 0; i < nodes.length; i++) {
        const a = positions[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const b = positions[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > maxD2) continue;

          const d = Math.sqrt(d2);
          const strength = Math.pow(1 - d / maxD, 1.6);
          const alpha = 0.34 * strength;

          ctx.strokeStyle = 'rgba(190, 230, 255, 1)';
          ctx.globalAlpha = alpha;
          ctx.lineWidth = 1;

          if (!reducedMotion) {
            const dash = 8 + strength * 10;
            ctx.setLineDash([dash, 22]);
            ctx.lineDashOffset = -(flow + (nodes[i].phase + nodes[j].phase) * 5);
          } else {
            ctx.setLineDash([]);
          }

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      ctx.setLineDash([]);
      ctx.globalAlpha = 1;
    };

    const drawNodes = (positions: Array<{ x: number; y: number }>) => {
      if (!ctx) return;

      ctx.save();
      ctx.shadowColor = 'rgba(0, 217, 255, 0.42)';
      ctx.shadowBlur = 10;

      for (let i = 0; i < nodes.length; i++) {
        const p = positions[i];
        const r = 1.2 + ((nodes[i].seedA % 1000) / 1000) * 1.5;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4.5);
        g.addColorStop(0, 'rgba(220, 245, 255, 0.95)');
        g.addColorStop(0.35, 'rgba(170, 220, 255, 0.55)');
        g.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 4.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(235, 248, 255, 0.9)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    const render = (t: number) => {
      if (!ctx) return;

      drawBackground();
      const positions = nodes.map((n) => nodePosition(n, t));
      drawLinks(positions, t);
      drawNodes(positions);

      if (running) {
        rafId = requestAnimationFrame(render);
      }
    };

    const stop = () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = 0;
    };

    const start = () => {
      if (running) return;
      running = true;
      rafId = requestAnimationFrame(render);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));

      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);

      ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
      if (!ctx) return;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const minDim = Math.min(w, h);
      linkDist = minDim * 0.26;
      wander = minDim * 0.025;

      const area = w * h;
      const target = Math.round(Math.min(96, Math.max(36, area / 32000)));
      const count = reducedMotion ? Math.round(target * 0.7) : target;

      const rand = createPRNG(0x1234abcd ^ (w * 131 + h * 977));
      nodes = new Array(count).fill(0).map(() => {
        const baseX = rand();
        const baseY = rand();
        return {
          baseX,
          baseY,
          seedA: Math.floor(rand() * 1e9),
          seedB: Math.floor(rand() * 1e9),
          phase: rand() * 1000,
        };
      });

      render(performance.now());
    };

    const onMotionChange = (e: MediaQueryListEvent) => {
      reducedMotion = e.matches;
      resize();
      if (reducedMotion) {
        stop();
        render(performance.now());
      } else {
        start();
      }
    };

    resize();

    if (!reducedMotion) {
      start();
    }

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);

    motionQuery.addEventListener('change', onMotionChange);

    return () => {
      stop();
      ro.disconnect();
      motionQuery.removeEventListener('change', onMotionChange);
    };
  }, []);

  return (
    <section
      className="section hero"
      data-section="hero"
      aria-label="Opening"
    >
      <div className="hero__bg" data-hero-bg aria-hidden="true">
        <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />
      </div>
      <div className="hero__content" data-hero-content>
        <h1 className="hero__title">You have arrived.</h1>
        <p className="hero__sub">
          Autonomous operational intelligence. A cinematic, agentic AI build.
        </p>
        <div className="hero__progress" aria-live="polite">
          Scroll progress: {progressLabel}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
