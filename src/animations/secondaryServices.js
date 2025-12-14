import { gsap } from 'gsap';

function preparePath(path) {
  const length = path.getTotalLength();
  path.style.strokeDasharray = String(length);
  path.style.strokeDashoffset = String(length);
  return length;
}

export function initSecondaryServices({ reducedMotion }) {
  const section = document.querySelector('[data-section="secondary-services"]');
  if (!section) return;

  const lines = Array.from(section.querySelectorAll('[data-data-line]'));
  const labels = Array.from(section.querySelectorAll('[data-secondary-labels] .chip'));

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

  gsap.set(labels, { opacity: 0, y: 14, filter: 'blur(4px)' });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
  });

  tl.to(lines, {
    strokeDashoffset: 0,
    duration: 1.2,
    ease: 'power1.inOut',
    stagger: 0.14,
  }).to(
    labels,
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.08,
    },
    0.55,
  );
}
