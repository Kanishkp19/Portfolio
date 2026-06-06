import { useState, useCallback } from 'react';
import styles from './Navbar.module.css';

// SVG Icons
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 12h10M7 2v7M4 6l3 3 3-3" />
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Navbar({ currentSlideId, goToSlide, isDarkSlide, slides }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleLinkClick = useCallback((index) => {
    goToSlide(index);
    setIsOpen(false);
  }, [goToSlide]);

  // Find slide indices dynamically
  const homeIndex = slides.findIndex((s) => s.id === 'hero');
  const projectsIndex = slides.findIndex((s) => s.id === 'projects-overview');
  const experienceIndex = slides.findIndex((s) => s.id === 'experience');
  const skillsIndex = slides.findIndex((s) => s.id === 'about');
  const educationIndex = slides.findIndex((s) => s.id === 'education');
  const contactIndex = slides.findIndex((s) => s.id === 'contact');

  // Active state matching helper
  const getActiveNavId = (slideId) => {
    if (slideId === 'hero') return 'hero';
    if (slideId === 'projects-overview' || slideId.startsWith('project-')) return 'projects-overview';
    if (slideId === 'experience') return 'experience';
    if (slideId === 'about') return 'about';
    if (slideId === 'education') return 'education';
    if (slideId === 'contact') return 'contact';
    return '';
  };

  const activeNavId = getActiveNavId(currentSlideId);

  // Social Links mapping
  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/Kanishkp19',
      icon: <GithubIcon />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kanishk-pandey-925a113a9/',
      icon: <LinkedinIcon />,
    },
  ];

  return (
    <nav className={`${styles.navContainer} ${isDarkSlide ? styles.navDark : styles.navLight}`}>
      {/* Brand logo */}
      <a 
        href="#home" 
        className={styles.brand} 
        onClick={(e) => {
          e.preventDefault();
          handleLinkClick(homeIndex !== -1 ? homeIndex : 0);
        }}
        aria-label="Kanishk Portfolio Home"
      >
        <span>KANISHK</span>
        <span className={styles.logoDot} />
      </a>

      {/* Desktop navigation links */}
      <ul className={styles.linksList}>
        <li className={styles.linkItem}>
          <a
            href="#home"
            className={`${styles.link} ${activeNavId === 'hero' ? styles.linkActive : ''}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick(homeIndex); }}
          >
            Home
          </a>
          {activeNavId === 'hero' && <span className={styles.indicator} />}
        </li>
        <li className={styles.linkItem}>
          <a
            href="#projects"
            className={`${styles.link} ${activeNavId === 'projects-overview' ? styles.linkActive : ''}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick(projectsIndex); }}
          >
            Projects
          </a>
          {activeNavId === 'projects-overview' && <span className={styles.indicator} />}
        </li>
        <li className={styles.linkItem}>
          <a
            href="#experience"
            className={`${styles.link} ${activeNavId === 'experience' ? styles.linkActive : ''}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick(experienceIndex); }}
          >
            Experience
          </a>
          {activeNavId === 'experience' && <span className={styles.indicator} />}
        </li>
        <li className={styles.linkItem}>
          <a
            href="#skills"
            className={`${styles.link} ${activeNavId === 'about' ? styles.linkActive : ''}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick(skillsIndex); }}
          >
            Skills
          </a>
          {activeNavId === 'about' && <span className={styles.indicator} />}
        </li>
        <li className={styles.linkItem}>
          <a
            href="#education"
            className={`${styles.link} ${activeNavId === 'education' ? styles.linkActive : ''}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick(educationIndex); }}
          >
            Education
          </a>
          {activeNavId === 'education' && <span className={styles.indicator} />}
        </li>
        <li className={styles.linkItem}>
          <a
            href="#contact"
            className={`${styles.link} ${activeNavId === 'contact' ? styles.linkActive : ''}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick(contactIndex); }}
          >
            Contact
          </a>
          {activeNavId === 'contact' && <span className={styles.indicator} />}
        </li>
      </ul>

      {/* Right side Actions (Socials + Resume button) */}
      <div className={styles.rightActions}>
        <div className={styles.socials}>
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={`Visit my ${social.name}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeBtn}
          aria-label="Download Resume"
        >
          <span>Resume</span>
          <DownloadIcon />
        </a>
      </div>

      {/* Hamburger menu for mobile devices */}
      <button
        className={styles.menuToggle}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Mobile navigation menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isDarkSlide ? styles.navDark : styles.navLight} ${
          isOpen ? styles.mobileMenuOpen : ''
        }`}
      >
        <ul className={styles.mobileLinks}>
          <li>
            <a
              href="#home"
              className={`${styles.mobileLink} ${activeNavId === 'hero' ? styles.mobileLinkActive : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick(homeIndex); }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`${styles.mobileLink} ${activeNavId === 'projects-overview' ? styles.mobileLinkActive : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick(projectsIndex); }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={`${styles.mobileLink} ${activeNavId === 'experience' ? styles.mobileLinkActive : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick(experienceIndex); }}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`${styles.mobileLink} ${activeNavId === 'about' ? styles.mobileLinkActive : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick(skillsIndex); }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={`${styles.mobileLink} ${activeNavId === 'education' ? styles.mobileLinkActive : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick(educationIndex); }}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${styles.mobileLink} ${activeNavId === 'contact' ? styles.mobileLinkActive : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick(contactIndex); }}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className={styles.mobileRightActions}>
          <div className={styles.socials}>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={`Visit my ${social.name}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
            aria-label="Download Resume"
          >
            <span>Resume</span>
            <DownloadIcon />
          </a>
        </div>
      </div>
    </nav>
  );
}
