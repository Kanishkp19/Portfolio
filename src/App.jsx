import { useState, useEffect, useCallback, useRef, cloneElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Cursor from './components/Cursor/Cursor';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ProjectsLanding from './components/Projects/ProjectsLanding';
import ProjectCard from './components/ProjectCard/ProjectCard';
import SkillsStrip from './components/Skills/SkillsStrip';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import About from './components/About/About';
import Marketing from './components/Marketing/Marketing';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { projects } from './data/projects';
import { useSlideGesture } from './hooks/useSlideGesture';
import styles from './App.module.css';

/* ── Slide registry ───────────────────────────────────────────── */
const buildSlides = (projects) => [
  {
    id: 'hero',
    label: 'Home',
    dark: false,
    content: <Hero />,
  },
  {
    id: 'projects-overview',
    label: 'Projects',
    dark: true,
    content: (
      <>
        <ProjectsLanding />
        <SkillsStrip />
      </>
    ),
  },
  ...projects.map((proj, i) => ({
    id: `project-${proj.id}`,
    label: proj.title ?? `Project ${i + 1}`,
    dark: true,
    content: <ProjectCard project={proj} />,
  })),
  {
    id: 'experience',
    label: 'Experience',
    dark: true,
    content: <Experience />,
  },
  {
    id: 'about',
    label: 'About',
    dark: true,
    content: <About />,
  },
  {
    id: 'education',
    label: 'Education',
    dark: false,
    content: <Education />,
  },
  {
    id: 'contact',
    label: 'Contact',
    dark: true,
    content: (
      <>
        <Marketing />
        <Contact />
        <Footer />
      </>
    ),
  },
];

/* ── Animation variants ───────────────────────────────────────── */
// direction: +1 = forward (next), -1 = backward (prev)
const slideVariants = {
  enter: (dir) => ({
    y: dir > 0 ? '100%' : '-8%',
    scale: dir > 0 ? 1 : 0.94,
    opacity: dir > 0 ? 1 : 0.5,
  }),
  center: {
    y: '0%',
    scale: 1,
    opacity: 1,
    transition: {
      y:       { type: 'spring', stiffness: 320, damping: 36, mass: 0.9 },
      scale:   { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.3 },
    },
  },
  exit: (dir) => ({
    y: dir > 0 ? '-8%' : '100%',
    scale: dir > 0 ? 0.94 : 1,
    opacity: dir > 0 ? 0.45 : 1,
    transition: {
      y:       { type: 'spring', stiffness: 320, damping: 36, mass: 0.9 },
      scale:   { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.3 },
    },
  }),
};

/* ── Main App ─────────────────────────────────────────────────── */
export default function App() {
  const SLIDES = buildSlides(projects);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const isAnimating = useRef(false);
  const lastTransitionTime = useRef(0);
  const wheelTimer = useRef(null);
  const wheelAccum = useRef(0);
  const WHEEL_THRESHOLD = 80; // px accumulated before triggering slide change

  const goTo = useCallback(
    (index) => {
      if (isAnimating.current) return;
      if (index < 0 || index >= SLIDES.length) return;
      isAnimating.current = true;
      lastTransitionTime.current = Date.now();
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
      setTimeout(() => { isAnimating.current = false; }, 700);
    },
    [current, SLIDES.length]
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  /* ── Wheel handler ── */
  const handleWheel = useCallback(
    (e) => {
      const now = Date.now();

      // Block any slide transitions during transition animation or cooldown
      if (isAnimating.current || now - lastTransitionTime.current < 900) {
        e.preventDefault();
        return;
      }

      // Check if we are inside a scrollable slide
      const activeSlideEl = containerRef.current?.querySelector(`.${styles.slide}`);
      if (activeSlideEl) {
        const { scrollTop, scrollHeight, clientHeight } = activeSlideEl;

        // If slide content is scrollable (greater than viewport height)
        if (scrollHeight - clientHeight > 10) {
          // Increased tolerance on mobile to prevent accidental section switches
          const scrollTolerance = window.innerWidth <= 768 ? 30 : 5;
          
          // If scrolling down and haven't reached the bottom boundary
          if (e.deltaY > 0 && scrollTop + clientHeight < scrollHeight - scrollTolerance) {
            return; // Allow native scrolling of slide content
          }
          // If scrolling up and haven't reached the top boundary
          if (e.deltaY < 0 && scrollTop > scrollTolerance) {
            return; // Allow native scrolling of slide content
          }
        }
      }

      e.preventDefault();
      wheelAccum.current += e.deltaY;

      if (wheelTimer.current) clearTimeout(wheelTimer.current);
      wheelTimer.current = setTimeout(() => {
        wheelAccum.current = 0;
      }, 150);

      if (Math.abs(wheelAccum.current) >= WHEEL_THRESHOLD) {
        if (wheelAccum.current > 0) goNext();
        else goPrev();
        wheelAccum.current = 0;
        lastTransitionTime.current = Date.now();
        if (wheelTimer.current) clearTimeout(wheelTimer.current);
      }
    },
    [goNext, goPrev]
  );

  /* ── Keyboard handler ── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowUp'   || e.key === 'ArrowLeft')  goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  /* ── Wheel listener on wrapper (non-passive to allow preventDefault) ── */
  const containerRef = useRef(null);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    // Disable wheel/scroll interception on mobile devices
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;
    
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  /* ── Drag/swipe gestures ── */
  const gestureHandlers = useSlideGesture(goNext, goPrev, 55);
  
  // On mobile, enable swipe gestures but with higher threshold for deliberate navigation
  const isMobile = window.innerWidth <= 768;

  const isDarkSlide = SLIDES[current]?.dark ?? true;

  return (
    <>
      <Cursor />
      {SLIDES[current].id !== 'hero' && (
        <Navbar
          currentSlideId={SLIDES[current].id}
          goToSlide={goTo}
          isDarkSlide={isDarkSlide}
          slides={SLIDES}
        />
      )}

      {/* ── Main full-screen slider ── */}
      <div
        ref={containerRef}
        className={styles.sliderContainer}
        {...gestureHandlers}
        aria-label="Portfolio sections"
      >
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={SLIDES[current].id}
            className={`${styles.slide} ${SLIDES[current].dark ? styles.slideDark : styles.slideLight}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {SLIDES[current].id === 'hero'
              ? cloneElement(SLIDES[current].content, { goToSlide: goTo, slides: SLIDES })
              : SLIDES[current].content
            }
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Navigation dots (hidden on hero) ── */}
      {SLIDES[current].id !== 'hero' && (
        <nav
          className={styles.dotsIndicator}
          aria-label="Slide navigation"
        >
          {SLIDES.map((slide, i) => {
            const isActive = i === current;
            const dotClass = [
              styles.dot,
              !isDarkSlide ? styles.dotLight : '',
              isActive ? (isDarkSlide ? styles.dotActive : styles.dotLightActive) : '',
            ].filter(Boolean).join(' ');

            return (
              <button
                key={slide.id}
                className={dotClass}
                onClick={() => goTo(i)}
                aria-label={`Go to ${slide.label}`}
                aria-current={isActive ? 'true' : undefined}
                title={slide.label}
              />
            );
          })}
        </nav>
      )}
    </>
  );
}
