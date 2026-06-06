import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import styles from './Hero.module.css';
import WordsPullUp from '../Common/WordsPullUp';

export default function Hero({ goToSlide, slides }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Find slide indices dynamically from the slide registry
  const homeIndex       = slides ? slides.findIndex((s) => s.id === 'hero')              : 0;
  const projectsIndex   = slides ? slides.findIndex((s) => s.id === 'projects-overview'): 1;
  const experienceIndex = slides ? slides.findIndex((s) => s.id === 'experience')         : 2;
  const skillsIndex     = slides ? slides.findIndex((s) => s.id === 'about')              : 4;
  const contactIndex    = slides ? slides.findIndex((s) => s.id === 'contact')            : 5;

  // Navigation items — identical labels & targets to the main Navbar
  const navItems = [
    { label: 'Home',       index: homeIndex       },
    { label: 'Projects',   index: projectsIndex   },
    { label: 'Experience', index: experienceIndex },
    { label: 'Skills',     index: skillsIndex     },
    { label: 'Contact',    index: contactIndex    },
  ];

  const easeTransition = [0.16, 1, 0.3, 1];

  const handleNavClick = (index) => {
    if (goToSlide) {
      goToSlide(index);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <section className={styles.heroSection}>
      {/* ── Inner rounded frame ── */}
      <div className={styles.innerContainer}>

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.bgVideo}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            type="video/mp4"
          />
        </video>

        {/* Fractal noise overlay */}
        <div className={`noise-overlay ${styles.noiseOverlay}`} />

        {/* Dark gradient mask */}
        <div className={styles.gradientOverlay} />

        {/* ── Top Navbar pill ── */}
        <nav className={styles.navbarPill} aria-label="Hero navigation">
          {/* Brand mark on far left */}
          <span className={styles.brandMark}>KANISHK</span>

          {/* Divider */}
          <span className={styles.navDivider} aria-hidden="true" />

          {/* Nav Links - Desktop only */}
          <div className={styles.desktopLinks}>
            {navItems.map((item, idx) => (
              <button
                key={idx}
                className={styles.navLink}
                onClick={() => handleNavClick(item.index)}
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <span className={styles.navDivider} aria-hidden="true" />

          {/* Resume button - Desktop */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.resumeBtn} ${styles.desktopOnly}`}
            aria-label="Download Resume"
          >
            <span>Resume</span>
            <Download size={12} strokeWidth={2.5} />
          </a>

          {/* Hamburger Menu - Mobile only */}
          <button
            className={styles.mobileMenuToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenuOverlay}>
            <div className={styles.mobileMenuContent}>
              {navItems.map((item, idx) => (
                <button
                  key={idx}
                  className={styles.mobileMenuItem}
                  onClick={() => handleNavClick(item.index)}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileResumeBtn}
                aria-label="Download Resume"
              >
                <span>Resume</span>
                <Download size={14} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        )}

        {/* ── Hero bottom content grid ── */}
        <div className={styles.heroContentGrid}>

          {/* Left: Giant title */}
          <div className={styles.headingColumn}>
            <h1 className={styles.mainTitle}>
              <WordsPullUp text="KANISHK PANDEY" />
            </h1>
            <div className={styles.headingDivider} />
            <motion.div
              className={styles.subHeadingText}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 0.85 }}
              transition={{ delay: 0.4, duration: 0.8, ease: easeTransition }}
            >
              AI ARCHITECT // NEURAL ENGINEER
            </motion.div>
          </div>

          {/* Right: Description */}
          <div className={styles.rightColumn}>
            <motion.p
              className={styles.descriptionText}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: easeTransition }}
            >
              Kanishk is a neural engineer and deep learning developer building
              autonomous agents and intelligent systems, bound not by labels but
              by passion and hunger to unlock the potential of cognitive computation.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
