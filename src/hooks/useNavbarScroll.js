import { useState, useEffect } from 'react';

/**
 * Navbar scroll state hook.
 * Returns `isScrolled` boolean when scrollY exceeds threshold.
 */
export function useNavbarScroll(threshold = 80) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    /* Check initial state */
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
