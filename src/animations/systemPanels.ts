import { gsap } from 'gsap';

export interface AnimationContext {
  reducedMotion: boolean;
}

export function initSystemPanels({ reducedMotion }: AnimationContext) {
  const section = document.querySelector<HTMLElement>('[data-section="system"]');
  if (!section) return;

  const panels = Array.from(section.querySelectorAll<HTMLElement>('[data-system-panel]'));
  if (panels.length === 0) return;

  if (reducedMotion) {
    gsap.set(panels, { clearProps: 'opacity,transform,filter' });
    return;
  }

  gsap.set(panels, {
    opacity: 0,
    y: 72,
    z: -240,
    rotateX: 12,
    filter: 'blur(8px)',
    transformPerspective: 900,
    force3D: true,
  } as any);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        end: 'bottom 45%',
        toggleActions: 'play none none reverse',
      } as any,
    })
    .to(panels, {
      opacity: 1,
      y: 0,
      z: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      duration: 1.1,
      ease: 'power2.out',
      stagger: 0.12,
    } as any)
    .to(
      panels,
      {
        duration: 0.6,
        ease: 'power1.out',
        boxShadow: '0 22px 60px rgba(0,0,0,0.25)',
        stagger: 0.08,
      } as any,
      0.1,
    );
}
