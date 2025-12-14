import { gsap } from 'gsap';

export interface AnimationContext {
  reducedMotion: boolean;
}

export function initHero({ reducedMotion }: AnimationContext) {
  const section = document.querySelector<HTMLElement>('[data-section="hero"]');
  if (!section) return;

  const bg = section.querySelector<HTMLElement>('[data-hero-bg]');
  const content = section.querySelector<HTMLElement>('[data-hero-content]');
  if (!bg || !content) return;

  if (reducedMotion) {
    gsap.set(bg, { clearProps: 'filter,transform' });
    gsap.set(content, { clearProps: 'opacity,transform' });
    return;
  }

  gsap.set(bg, { filter: 'blur(0px)', scale: 1 });
  gsap.set(content, { opacity: 1, y: 0 });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      } as any,
    })
    .to(bg, { filter: 'blur(14px)', scale: 1.06, ease: 'none' }, 0)
    .to(content, { opacity: 0, y: -40, ease: 'none' }, 0);
}
