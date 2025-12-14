import { gsap } from 'gsap';

export function initHero({ reducedMotion }) {
  const section = document.querySelector('[data-section="hero"]');
  if (!section) return;

  const bg = section.querySelector('[data-hero-bg]');
  const content = section.querySelector('[data-hero-content]');

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
      },
    })
    .to(bg, { filter: 'blur(14px)', scale: 1.06, ease: 'none' }, 0)
    .to(content, { opacity: 0, y: -40, ease: 'none' }, 0);
}
