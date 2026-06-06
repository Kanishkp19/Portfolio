import RevealWrapper from '../Common/RevealWrapper';
import styles from './Experience.module.css';

export default function ExperienceRow({ exp, index }) {
  return (
    <div className={styles.row}>
      {/* Left Column: Role & Research Meta */}
      <div className={styles.leftCol}>
        <RevealWrapper delay={index * 0.1} direction="right">
          <span className={styles.compName}>[ {exp.company.toUpperCase()} ]</span>
          <h3 className={styles.roleTitle}>{exp.role}</h3>
          <span className={styles.dateLabel}>{exp.date}</span>
        </RevealWrapper>
      </div>

      {/* Right Column: Key Bullets & System Processes */}
      <div className={styles.rightCol}>
        <RevealWrapper delay={index * 0.1 + 0.1} direction="left">
          <p className={styles.summaryText}>{exp.summary}</p>
          
          <ul className={styles.bulletsList}>
            {exp.bullets.map((bullet, i) => (
              <li key={i} className={styles.bulletItem}>
                <span className={styles.bulletPoint}>✦</span>
                <span className={styles.bulletText}>{bullet}</span>
              </li>
            ))}
          </ul>

          {exp.appBlock && (
            <div className={styles.appBlock} data-cursor-hover>
              <div className={styles.appHeader}>
                <span className={styles.appStatusDot} />
                <span className={styles.appTitle}>SYSTEM PROCESS LOG // {exp.id.toUpperCase()}</span>
              </div>
              <div className={styles.appDesc}>
                <span className={styles.terminalPrompt}>$ cat pipeline_flow.log</span>
                <div className={styles.terminalOutput}>{exp.appBlock.description}</div>
              </div>
            </div>
          )}
        </RevealWrapper>
      </div>
    </div>
  );
}
