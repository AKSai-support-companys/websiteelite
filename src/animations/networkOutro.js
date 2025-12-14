import { gsap } from 'gsap';

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

export function initNetworkOutro({ reducedMotion }) {
  const section = document.querySelector('[data-section="network"]');
  if (!section) return;

  const frame = section.querySelector('[data-network-frame]');
  const nodesContainer = section.querySelector('[data-network-nodes]');

  if (!frame || !nodesContainer) return;

  const nodes = Array.from(nodesContainer.querySelectorAll('.node'));

  if (reducedMotion) {
    gsap.set([frame, ...nodes], { clearProps: 'opacity,filter,transform' });
    return;
  }

  gsap.set(frame, { opacity: 1, filter: 'blur(0px)', y: 0 });
  gsap.set(nodes, { opacity: 1, x: 0, y: 0, force3D: true });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        end: 'bottom top',
        scrub: true,
      },
    })
    .to(
      nodes,
      {
        x: (i) => (NODE_OFFSETS[i] ? NODE_OFFSETS[i].x : 0),
        y: (i) => (NODE_OFFSETS[i] ? NODE_OFFSETS[i].y : 0),
        ease: 'power1.inOut',
        stagger: 0.02,
      },
      0,
    )
    .to(
      nodes,
      {
        x: (i) => (NODE_OFFSETS[i] ? NODE_OFFSETS[i].x * 0.35 : 0),
        y: (i) => (NODE_OFFSETS[i] ? NODE_OFFSETS[i].y * 0.35 : 0),
        ease: 'power3.out',
        stagger: 0.02,
      },
      0.72,
    )
    .to(
      frame,
      {
        opacity: 0.18,
        filter: 'blur(10px)',
        y: -24,
        ease: 'none',
      },
      0,
    )
    .to(
      nodes,
      {
        opacity: 0.55,
        ease: 'none',
      },
      0,
    );
}
