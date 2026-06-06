import RevealWrapper from '../Common/RevealWrapper';
import { education, keyRoles } from '../../data/education';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        {/* Section Title */}
        <RevealWrapper className={styles.titleWrapper}>
          <span className={styles.overline}>ACADEMIC PATH</span>
          <h2 className={styles.heading}>
            EDUCATION <span className={styles.accentText}>HISTORY</span>
          </h2>
        </RevealWrapper>

        {/* Timeline Grid */}
        <div className={styles.timeline}>
          <div className={styles.timelineLine} aria-hidden="true" />

          {education.map((edu, index) => (
            <div key={edu.id} className={styles.timelineItem}>
              {/* Vertical timeline node */}
              <div className={styles.timelineNode} aria-hidden="true">
                <span className={styles.timelineDot} />
              </div>

              {/* Content Card */}
              <RevealWrapper
                className={styles.card}
                delay={index * 0.15}
                direction={index % 2 === 0 ? 'right' : 'left'}
                data-cursor-hover
              >
                <span className={styles.yearBadge}>{edu.year}</span>
                <h3 className={styles.schoolName}>{edu.school}</h3>
                <h4 className={styles.degreeTitle}>{edu.degree}</h4>
                <div className={styles.gradeBox}>
                  <span className={styles.gradeLabel}>{edu.grade}</span>
                </div>
              </RevealWrapper>
            </div>
          ))}
        </div>

        {/* Key Roles Section */}
        <div className={styles.rolesSection}>
          <RevealWrapper delay={0.5}>
            <h3 className={styles.rolesTitle}>[ KEY_ROLES ]</h3>
          </RevealWrapper>

          <div className={styles.rolesList}>
            {keyRoles.map((role, i) => (
              <RevealWrapper 
                key={i} 
                className={styles.roleItem} 
                delay={i * 0.1 + 0.6} 
                direction="up"
                data-cursor-hover
              >
                <span className={styles.roleIcon}>✦</span>
                <div className={styles.roleContent}>
                  <h4 className={styles.roleName}>{role.title}</h4>
                  <p className={styles.roleDescription}>{role.description}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
