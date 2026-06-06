import RevealWrapper from '../Common/RevealWrapper';
import SkillCategory from './SkillCategory';
import { skillCategories, aboutStats, aboutBio } from '../../data/skills';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Bio & Core Stats */}
          <div className={styles.leftCol}>
            <RevealWrapper>
              <span className={styles.overline}>BACKGROUND</span>
              <h2 className={styles.heading}>
                ABOUT <span className={styles.accentText}>KANISHK</span>
              </h2>
            </RevealWrapper>

            <RevealWrapper className={styles.bioContainer} delay={0.1}>
              {aboutBio.map((paragraph, i) => (
                <p key={i} className={styles.bioText}>
                  {paragraph}
                </p>
              ))}
            </RevealWrapper>

            {/* Core Stats Grid */}
            <div className={styles.statsGrid}>
              {aboutStats.map((stat, i) => (
                <RevealWrapper
                  key={i}
                  className={styles.statCard}
                  delay={i * 0.08 + 0.15}
                  direction="up"
                  data-cursor-hover
                >
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </RevealWrapper>
              ))}
            </div>
          </div>

          {/* Right Column: Skill Pills Groups */}
          <div className={styles.rightCol}>
            <RevealWrapper className={styles.skillsHeadingWrapper}>
              <h3 className={styles.skillsHeading}>TECHNICAL SKILLS</h3>
              <p className={styles.skillsSub}>
                Hands-on capabilities spanning core AI, systems, and engineering
              </p>
            </RevealWrapper>

            <div className={styles.categoriesList}>
              {skillCategories.map((cat, i) => (
                <SkillCategory key={cat.name} category={cat} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
