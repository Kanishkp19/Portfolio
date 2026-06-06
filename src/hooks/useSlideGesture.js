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
  const isMobile = useRef(window.innerWidth <= 768);

  const onPointerDown = useCallback((e) => {
    // Update mobile detection on each interaction
    isMobile.current = window.innerWidth <= 768;
    
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

    // On mobile, use higher threshold for section changes
    const mobileThreshold = isMobile.current ? threshold * 2 : threshold;

    // Prefer the dominant axis
    if (Math.abs(dy) > Math.abs(dx)) {
      // vertical drag
      const slideEl = e.target?.closest?.('[class*="slide"]');
      if (slideEl) {
        const { scrollTop, scrollHeight, clientHeight } = slideEl;
        const isScrollable = scrollHeight - clientHeight > 10;
        
        // If content is scrollable, check if we're at boundaries
        if (isScrollable) {
          const atBottom = scrollTop + clientHeight >= scrollHeight - 5;
          const atTop = scrollTop <= 5;
          
          // Swiping up (going to next section) - only if at bottom
          if (dy < -mobileThreshold && atBottom) {
            onNext();
            startX.current = null;
            startY.current = null;
            return;
          }
          
          // Swiping down (going to previous section) - only if at top
          if (dy > mobileThreshold && atTop) {
            onPrev();
            startX.current = null;
            startY.current = null;
            return;
          }
          
          // Otherwise, allow internal scrolling
          startX.current = null;
          startY.current = null;
          return;
        }
        
        // Not scrollable, allow section change
        if (dy < -mobileThreshold) onNext();
        else if (dy > mobileThreshold) onPrev();
      } else {
        // No slide element found, use default behavior
        if (dy < -mobileThreshold) onNext();
        else if (dy > mobileThreshold) onPrev();
      }
    } else {
      // horizontal drag (swipe left → next, swipe right → prev)
      // Only on desktop or for short sections
      if (!isMobile.current) {
        if (dx < -threshold) onNext();
        else if (dx > threshold) onPrev();
      }
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
