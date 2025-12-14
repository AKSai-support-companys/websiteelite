import { gsap } from 'gsap';

export interface AnimationContext {
  reducedMotion: boolean;
}

const NODE_OFFSETS = [
  { x: -14, y: 10 },
  { x: 16, y: -12 },
  { x: -10, y: -14 },
  { x: 12, y: 16 },
  { x: 18, y: 8 },
  { x: -16, y: 12 },
  { x: 10, y: -16 },
  { x: -12, y: -8 },
  { x: 14, y: -10 },
  { x: -18, y: 6 },
  { x: 8, y: 18 },
  { x: -8, y: -18 },
];

export function initNetworkOutro({ reducedMotion }: AnimationContext) {
  const section = document.querySelector<HTMLElement>('[data-section="network"]');
  if (!section) return;

  const frame = section.querySelector<HTMLElement>('[data-network-frame]');
  const nodesContainer = section.querySelector<HTMLElement>('[data-network-nodes]');
  if (!frame || !nodesContainer) return;

  const nodes = Array.from(nodesContainer.querySelectorAll<HTMLElement>('.node'));

  if (reducedMotion) {
    gsap.set([frame, ...nodes], { clearProps: 'opacity,filter,transform' });
    return;
  }

  gsap.set(frame, { opacity: 1, filter: 'blur(0px)', y: 0 } as any);
  gsap.set(nodes, { opacity: 1, x: 0, y: 0, force3D: true } as any);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        end: 'bottom top',
        scrub: true,
      } as any,
    })
    .to(
      nodes,
      {
        x: (i: number) => (NODE_OFFSETS[i] ? NODE_OFFSETS[i].x : 0),
        y: (i: number) => (NODE_OFFSETS[i] ? NODE_OFFSETS[i].y : 0),
        ease: 'power1.inOut',
        stagger: 0.02,
      } as any,
      0,
    )
    .to(
      nodes,
      {
        x: (i: number) => (NODE_OFFSETS[i] ? NODE_OFFSETS[i].x * 0.35 : 0),
        y: (i: number) => (NODE_OFFSETS[i] ? NODE_OFFSETS[i].y * 0.35 : 0),
        ease: 'power3.out',
        stagger: 0.02,
      } as any,
      0.72,
    )
    .to(
      frame,
      {
        opacity: 0.18,
        filter: 'blur(10px)',
        y: -24,
        ease: 'none',
      } as any,
      0,
    )
    .to(
      nodes,
      {
        opacity: 0.55,
        ease: 'none',
      } as any,
      0,
    );
}
