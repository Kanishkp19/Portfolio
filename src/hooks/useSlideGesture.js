import { useCallback, useRef, useEffect } from 'react';

/**
 * useSlideGesture – returns drag/swipe handlers that call onNext / onPrev.
 * Works for both mouse drag and touch swipe.
 * @param {function} onNext  called when user drags UP or swipes left
 * @param {function} onPrev  called when user drags DOWN or swipes right
 * @param {number}   threshold  minimum pixel movement to trigger (default 60)
 */
export function useSlideGesture(onNext, onPrev, threshold = 60) {
  // All refs declared at the top - don't change the order!
  const startX = useRef(null);
  const startY = useRef(null);
  const currentX = useRef(null);
  const currentY = useRef(null);
  const isDragging = useRef(false);
  const isMobileDevice = useRef(false);
  const debugDiv = useRef(null);

  useEffect(() => {
    // Detect mobile device
    isMobileDevice.current = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
  }, []);

  const updateDebug = useCallback((message) => {
    // Debug disabled - just console log
    console.log('[GESTURE]', message.replace(/<br>/g, ' | '));
  }, []);

  const onTouchStart = useCallback((e) => {
    const touch = e.touches?.[0];
    if (!touch) return;
    
    startX.current = touch.clientX;
    startY.current = touch.clientY;
    currentX.current = touch.clientX;
    currentY.current = touch.clientY;
    isDragging.current = true;
    
    updateDebug(`✋ START<br>x=${touch.clientX.toFixed(0)}, y=${touch.clientY.toFixed(0)}`);
  }, [updateDebug]);

  const onTouchMove = useCallback((e) => {
    if (!isDragging.current) return;
    
    const touch = e.touches?.[0];
    if (!touch) return;
    
    currentX.current = touch.clientX;
    currentY.current = touch.clientY;
    
    const dx = currentX.current - startX.current;
    const dy = currentY.current - startY.current;
    
    updateDebug(`👆 MOVE<br>dx=${dx.toFixed(0)}, dy=${dy.toFixed(0)}`);
  }, [updateDebug]);

  const onTouchEnd = useCallback((e) => {
    if (!isDragging.current) {
      updateDebug('END: Not dragging');
      return;
    }

    isDragging.current = false;
    
    if (startX.current === null || startY.current === null || currentX.current === null || currentY.current === null) {
      updateDebug('END: Missing position data');
      startX.current = null;
      startY.current = null;
      currentX.current = null;
      currentY.current = null;
      return;
    }
    
    const dx = currentX.current - startX.current;
    const dy = currentY.current - startY.current;
    const effectiveThreshold = isMobileDevice.current ? 100 : threshold;

    updateDebug(`🎯 SWIPE<br>dx=${dx.toFixed(0)}, dy=${dy.toFixed(0)}<br>Need: ${effectiveThreshold}px`);

    // Prefer vertical swipes
    if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 20) {
      const slideEl = e.target?.closest?.('[class*="slide"]');
      
      if (slideEl) {
        const { scrollTop, scrollHeight, clientHeight } = slideEl;
        const isScrollable = scrollHeight > clientHeight + 20;
        const scrollTolerance = isMobileDevice.current ? 40 : 10;
        const atBottom = scrollTop + clientHeight >= scrollHeight - scrollTolerance;
        const atTop = scrollTop <= scrollTolerance;
        
        updateDebug(`📊 Scroll: ${scrollTop.toFixed(0)}/${scrollHeight.toFixed(0)}<br>Scrollable: ${isScrollable}<br>Top: ${atTop}, Bottom: ${atBottom}<br>dy: ${dy.toFixed(0)}`);
        
        if (isScrollable) {
          if (dy < -effectiveThreshold && atBottom) {
            updateDebug('✅ NEXT SECTION!');
            onNext();
          } else if (dy > effectiveThreshold && atTop) {
            updateDebug('✅ PREV SECTION!');
            onPrev();
          } else {
            updateDebug(`❌ ${!atBottom && dy < 0 ? 'Not at bottom' : ''}${!atTop && dy > 0 ? 'Not at top' : ''}${Math.abs(dy) < effectiveThreshold ? ' Swipe weak' : ''}`);
          }
        } else {
          if (dy < -effectiveThreshold) {
            updateDebug('✅ NEXT (no scroll)');
            onNext();
          } else if (dy > effectiveThreshold) {
            updateDebug('✅ PREV (no scroll)');
            onPrev();
          } else {
            updateDebug(`❌ Swipe too weak: ${dy.toFixed(0)}px`);
          }
        }
      }
    } else {
      updateDebug(`❌ Swipe too small or horizontal`);
    }

    startX.current = null;
    startY.current = null;
    currentX.current = null;
    currentY.current = null;
  }, [onNext, onPrev, threshold, updateDebug]);

  const onTouchCancel = useCallback(() => {
    isDragging.current = false;
    startX.current = null;
    startY.current = null;
    currentX.current = null;
    currentY.current = null;
    updateDebug('🚫 CANCELLED');
  }, [updateDebug]);

  // For desktop - use pointer events
  const onPointerDown = useCallback((e) => {
    if (isMobileDevice.current) return;
    
    startX.current = e.clientX;
    startY.current = e.clientY;
    isDragging.current = true;
  }, []);

  const onPointerMove = useCallback((e) => {
    if (isMobileDevice.current || !isDragging.current) return;
    currentX.current = e.clientX;
    currentY.current = e.clientY;
  }, []);

  const onPointerUp = useCallback((e) => {
    if (isMobileDevice.current) return;
    if (!isDragging.current) return;
    
    isDragging.current = false;
    
    if (currentX.current === null || currentY.current === null) {
      currentX.current = e.clientX;
      currentY.current = e.clientY;
    }
    
    const dx = currentX.current - startX.current;
    const dy = currentY.current - startY.current;

    if (Math.abs(dy) > Math.abs(dx)) {
      if (dy < -threshold) onNext();
      else if (dy > threshold) onPrev();
    } else {
      if (dx < -threshold) onNext();
      else if (dx > threshold) onPrev();
    }

    startX.current = null;
    startY.current = null;
    currentX.current = null;
    currentY.current = null;
  }, [onNext, onPrev, threshold]);

  return { 
    onPointerDown, 
    onPointerMove,
    onPointerUp,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel
  };
}
