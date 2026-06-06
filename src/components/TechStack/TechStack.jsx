import RevealWrapper from '../Common/RevealWrapper';
import { skillCategories } from '../../data/skills';
import styles from './TechStack.module.css';

export default function TechStack() {
  return (
    <section id="tech-stack" className={styles.section}>
      <div className={styles.container}>
        {/* Section Heading */}
        <RevealWrapper className={styles.headingWrapper}>
          <span className={styles.overline}>TECHNICAL MODEL LAYERS</span>
          <h2 className={styles.heading}>
            AI STACK <span className={styles.accentText}>ARCHITECTURE</span>
          </h2>
          <p className={styles.subText}>
            Core competencies spanning deep representation models, speech fine-tuning, and robust systems backend.
          </p>
        </RevealWrapper>

        {/* Stack Grid */}
        <div className={styles.grid}>
          {skillCategories.map((cat, index) => (
            <RevealWrapper
              key={cat.name}
              className={styles.card}
              delay={index * 0.08}
              direction="up"
              data-cursor-hover
            >
              {/* Glowing Corner */}
              <div className={`${styles.glowNode} ${styles[cat.variant]}`} />

              <div className={styles.cardHeader}>
                <span className={`${styles.indicator} ${styles[cat.variant]}`} />
                <h3 className={styles.catTitle}>{cat.name}</h3>
              </div>

              <div className={styles.pillsGrid}>
                {cat.skills.map((skill, i) => (
                  <span key={i} className={`${styles.pill} ${styles[cat.variant]}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
