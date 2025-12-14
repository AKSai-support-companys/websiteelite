import { useEffect, useRef, useCallback } from 'react';

interface ScrollTrigger {
  kill: () => void;
}

export interface ScrollSyncOptions {
  trigger?: HTMLElement | string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  anticipatePin?: number;
  onUpdate?: (progress: number) => void;
  onComplete?: () => void;
  onStart?: () => void;
  toggleActions?: string;
  markers?: boolean;
}

export interface ScrollSyncReturn {
  trigger: ScrollTrigger | null;
  progress: number;
  refresh: () => void;
  kill: () => void;
  killAll: () => void;
}

export const useScrollSync = (
  options: ScrollSyncOptions = {}
): ScrollSyncReturn => {
  const {
    trigger = 'body',
    start = 'top top+=100',
    end = 'bottom top',
    scrub = 1,
    pin = false,
    anticipatePin = 1,
    onUpdate,
    onComplete,
    onStart,
    toggleActions = 'play none none none',
    markers = false,
  } = options;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const config = { trigger, start, end, scrub, pin, anticipatePin, toggleActions, markers };

  const triggerRef = useRef<ScrollTrigger | null>(null);
  const progressRef = useRef(0);

  const createTrigger = useCallback(() => {
    if (triggerRef.current) {
      triggerRef.current.kill();
    }

    // Create a simple scroll sync without ScrollTrigger for now
    // This provides basic scroll progress tracking
    let scrollProgress = 0;
    
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const currentScroll = window.scrollY;
      
      scrollProgress = maxScroll > 0 ? currentScroll / maxScroll : 0;
      progressRef.current = scrollProgress;
      onUpdate?.(scrollProgress);
      
      if (currentScroll > 0) {
        onStart?.();
      } else if (scrollProgress >= 1) {
        onComplete?.();
      }
    };

    // Add scroll listener for basic functionality
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize

    const mockTrigger: ScrollTrigger = {
      kill: () => {
        window.removeEventListener('scroll', handleScroll);
      }
    };

    triggerRef.current = mockTrigger;
    return triggerRef.current;
  }, [onUpdate, onStart, onComplete]);

  const refresh = useCallback(() => {
    // For future ScrollTrigger integration
    console.log('Refreshing scroll triggers...');
  }, []);

  const kill = useCallback(() => {
    if (triggerRef.current) {
      triggerRef.current.kill();
      triggerRef.current = null;
    }
  }, []);

  const killAll = useCallback(() => {
    // For future ScrollTrigger integration
    console.log('Killing all scroll triggers...');
    triggerRef.current = null;
  }, []);

  useEffect(() => {
    createTrigger();

    return () => {
      kill();
    };
  }, [createTrigger, kill]);

  useEffect(() => {
    const handleResize = () => {
      // Trigger a refresh on resize for responsive behavior
      refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [refresh]);

  return {
    trigger: triggerRef.current,
    progress: progressRef.current,
    refresh,
    kill,
    killAll,
  };
};

export default useScrollSync;
