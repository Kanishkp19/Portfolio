import Marquee from '../Common/Marquee';
import RevealWrapper from '../Common/RevealWrapper';
import ExperienceRow from './ExperienceRow';
import { experiences, experienceTickerText } from '../../data/experience';
import styles from './Experience.module.css';

export default function Experience() {
  const tickerItems = experienceTickerText.split('    ');

  return (
    <section id="experience" className={styles.section}>
      {/* Horizontal scrolling ticker at top of section */}
      <div className={styles.sectionTicker} aria-hidden="true">
        <Marquee
          items={tickerItems}
          speed="25s"
          direction="fwd"
          separator=" · "
          itemClassName={styles.tickerItem}
        />
      </div>

      <div className={styles.container}>
        {/* Section Heading */}
        <RevealWrapper className={styles.headingWrapper}>
          <span className={styles.overline}>PROFESSIONAL PATH</span>
          <h2 className={styles.heading}>
            WORK <span className={styles.accentText}>EXPERIENCE</span>
          </h2>
        </RevealWrapper>

        {/* Experience Rows */}
        <div className={styles.rowsContainer}>
          {experiences.map((exp, index) => (
            <ExperienceRow key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
