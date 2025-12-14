import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { initHero } from '../animations/hero';
import { initSystemPanels } from '../animations/systemPanels';
import { initSecondaryServices } from '../animations/secondaryServices';
import { initEngagementModules } from '../animations/engagementModules';
import { initNetworkOutro } from '../animations/networkOutro';
import { prefersReducedMotion } from '../utils/prefersReducedMotion';

export function useCinematicScrollAnimations() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const reducedMotion = prefersReducedMotion();

    initHero({ reducedMotion });
    initSystemPanels({ reducedMotion });
    initSecondaryServices({ reducedMotion });
    initEngagementModules({ reducedMotion });
    initNetworkOutro({ reducedMotion });

    if (reducedMotion) {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
