import { gsap } from 'gsap';

export interface AnimationContext {
  reducedMotion: boolean;
}

function preparePath(path: SVGPathElement) {
  const length = path.getTotalLength();
  path.style.strokeDasharray = String(length);
  path.style.strokeDashoffset = String(length);
  return length;
}

export function initSecondaryServices({ reducedMotion }: AnimationContext) {
  const section = document.querySelector<HTMLElement>('[data-section="secondary-services"]');
  if (!section) return;

  const lines = Array.from(section.querySelectorAll<SVGPathElement>('[data-data-line]'));
  const labels = Array.from(section.querySelectorAll<HTMLElement>('[data-secondary-labels] .chip'));

  if (lines.length === 0) return;

  if (reducedMotion) {
    lines.forEach((line) => {
      line.style.strokeDasharray = '';
      line.style.strokeDashoffset = '';
    });

    gsap.set(labels, { clearProps: 'opacity,transform,filter' });
    return;
  }

  lines.forEach(preparePath);
  gsap.set(labels, { opacity: 0, y: 14, filter: 'blur(4px)' } as any);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    } as any,
  });

  tl.to(lines, {
    strokeDashoffset: 0,
    duration: 1.2,
    ease: 'power1.inOut',
    stagger: 0.14,
  } as any).to(
    labels,
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.08,
    } as any,
    0.55,
  );
}
