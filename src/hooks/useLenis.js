import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Custom React hook to initialize Lenis smooth scrolling globally.
 * Cleans up and destroys the instance when the component unmounts.
 */
export function useLenis() {
  useEffect(() => {
    // Check if running on client and device supports hover/pointer
    if (typeof window === 'undefined' || window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Sync with GSAP ScrollTrigger if GSAP is used in scrolling animations
    window.addEventListener('resize', () => {
      lenis.resize();
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
