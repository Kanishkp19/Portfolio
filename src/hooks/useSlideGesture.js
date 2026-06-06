import { useCallback, useRef } from 'react';

/**
 * useSlideGesture – returns drag/swipe handlers that call onNext / onPrev.
 * Works for both mouse drag and touch swipe.
 * @param {function} onNext  called when user drags UP or swipes left
 * @param {function} onPrev  called when user drags DOWN or swipes right
 * @param {number}   threshold  minimum pixel movement to trigger (default 60)
 */
export function useSlideGesture(onNext, onPrev, threshold = 60) {
  const startX = useRef(null);
  const startY = useRef(null);
  const isDragging = useRef(false);

  const onPointerDown = useCallback((e) => {
    startX.current = e.clientX ?? e.touches?.[0]?.clientX;
    startY.current = e.clientY ?? e.touches?.[0]?.clientY;
    isDragging.current = true;
  }, []);

  const onPointerUp = useCallback((e) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const endX = e.clientX ?? e.changedTouches?.[0]?.clientX;
    const endY = e.clientY ?? e.changedTouches?.[0]?.clientY;
    const dx = endX - startX.current;
    const dy = endY - startY.current;

    // Prefer the dominant axis
    if (Math.abs(dy) > Math.abs(dx)) {
      // vertical drag
      const slideEl = e.target?.closest?.('[class*="slide"]');
      if (slideEl) {
        const { scrollTop, scrollHeight, clientHeight } = slideEl;
        
        // If content is scrollable
        if (scrollHeight - clientHeight > 10) {
          // If swiping up (dragging finger up, scrolling page down)
          if (dy < -threshold && scrollTop + clientHeight < scrollHeight - 5) {
            startX.current = null;
            startY.current = null;
            return;
          }
          // If swiping down (dragging finger down, scrolling page up)
          if (dy > threshold && scrollTop > 5) {
            startX.current = null;
            startY.current = null;
            return;
          }
        }
      }

      if (dy < -threshold) onNext();
      else if (dy > threshold) onPrev();
    } else {
      // horizontal drag (swipe left → next, swipe right → prev)
      if (dx < -threshold) onNext();
      else if (dx > threshold) onPrev();
    }

    startX.current = null;
    startY.current = null;
  }, [onNext, onPrev, threshold]);

  const onPointerCancel = useCallback(() => {
    isDragging.current = false;
    startX.current = null;
    startY.current = null;
  }, []);

  return { onPointerDown, onPointerUp, onPointerCancel };
}
