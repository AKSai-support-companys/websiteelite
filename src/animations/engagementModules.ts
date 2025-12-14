import { gsap } from 'gsap';

export interface AnimationContext {
  reducedMotion: boolean;
}

function setActive(modules: HTMLElement[], activeIndex: number, { immediate = false } = {}) {
  modules.forEach((module, index) => {
    const isActive = index === activeIndex;
    const props = {
      opacity: isActive ? 1 : 0.38,
      filter: isActive ? 'blur(0px)' : 'blur(1.5px)',
      scale: isActive ? 1 : 0.985,
    };

    if (immediate) {
      gsap.set(module, props as any);
      return;
    }

    gsap.to(module, {
      ...(props as any),
      duration: 0.35,
      ease: 'power2.out',
      overwrite: true,
    });
  });
}

export function initEngagementModules({ reducedMotion }: AnimationContext) {
  const section = document.querySelector<HTMLElement>('[data-section="engagement"]');
  if (!section) return;

  const modules = Array.from(section.querySelectorAll<HTMLElement>('[data-engagement-module]'));
  if (modules.length === 0) return;

  if (reducedMotion) {
    gsap.set(modules, { clearProps: 'opacity,transform,filter' });
    return;
  }

  gsap.set(modules, { opacity: 0.5, filter: 'blur(1px)', scale: 0.99 } as any);
  setActive(modules, 0, { immediate: true });

  modules.forEach((module, index) => {
    gsap.fromTo(
      module,
      { y: 20 },
      {
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: module,
          start: 'top 65%',
          end: 'bottom 50%',
          onEnter: () => setActive(modules, index),
          onEnterBack: () => setActive(modules, index),
        } as any,
      } as any,
    );
  });

  gsap.to(modules, {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    } as any,
  } as any);
}
