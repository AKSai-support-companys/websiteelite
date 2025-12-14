import './style.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { prefersReducedMotion } from './utils/prefersReducedMotion.js';

import { initHero } from './animations/hero.js';
import { initSystemPanels } from './animations/systemPanels.js';
import { initSecondaryServices } from './animations/secondaryServices.js';
import { initEngagementModules } from './animations/engagementModules.js';
import { initNetworkOutro } from './animations/networkOutro.js';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = prefersReducedMotion();

document.documentElement.toggleAttribute('data-reduced-motion', reducedMotion);

initHero({ reducedMotion });
initSystemPanels({ reducedMotion });
initSecondaryServices({ reducedMotion });
initEngagementModules({ reducedMotion });
initNetworkOutro({ reducedMotion });

if (reducedMotion) {
  ScrollTrigger.getAll().forEach((t) => t.kill());
}
