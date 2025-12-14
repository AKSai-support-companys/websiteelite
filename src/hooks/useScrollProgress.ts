import { useEffect, useState } from 'react';

export interface ScrollProgressReturn {
  progress: number;
  scrollY: number;
  scrollDirection: 'up' | 'down' | 'idle';
  isScrolling: boolean;
}

export const useScrollProgress = (): ScrollProgressReturn => {
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | 'idle'>('idle');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const updateScrollData = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      
      const currentProgress = maxScroll > 0 ? currentScrollY / maxScroll : 0;
      
      setScrollY(currentScrollY);
      setProgress(Math.min(Math.max(currentProgress, 0), 1));
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      } else {
        setScrollDirection('idle');
      }
      
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      setIsScrolling(true);
      
      if (!ticking) {
        requestAnimationFrame(updateScrollData);
        ticking = true;
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    const handleResize = () => {
      updateScrollData();
    };

    // Initialize
    updateScrollData();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return {
    progress,
    scrollY,
    scrollDirection,
    isScrolling,
  };
};

export default useScrollProgress;
