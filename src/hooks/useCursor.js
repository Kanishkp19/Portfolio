import { useEffect, useRef, useCallback } from 'react';

/**
 * Custom cursor hook — replaces vanilla JS cursor animation.
 * Returns refs for dot and ring elements.
 * Handles smooth trailing animation via requestAnimationFrame.
 */
export function useCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  const onMouseMove = useCallback((e) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
  }, []);

  useEffect(() => {
    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    function animate() {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.14;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.14;

      dot.style.left = `${mouse.current.x}px`;
      dot.style.top = `${mouse.current.y}px`;
      ringEl.style.left = `${ring.current.x}px`;
      ringEl.style.top = `${ring.current.y}px`;

      rafId.current = requestAnimationFrame(animate);
    }

    document.addEventListener('mousemove', onMouseMove);
    rafId.current = requestAnimationFrame(animate);

    /* Hover expansion on interactive elements */
    const interactiveSelectors = 'a, button, [data-cursor-hover]';
    const elements = document.querySelectorAll(interactiveSelectors);

    const handleEnter = () => {
      ringEl.style.width = '56px';
      ringEl.style.height = '56px';
      ringEl.style.opacity = '0.8';
      dot.style.width = '14px';
      dot.style.height = '14px';
    };

    const handleLeave = () => {
      ringEl.style.width = '38px';
      ringEl.style.height = '38px';
      ringEl.style.opacity = '0.45';
      dot.style.width = '10px';
      dot.style.height = '10px';
    };

    elements.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId.current);
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, [onMouseMove]);

  return { dotRef, ringRef };
}
