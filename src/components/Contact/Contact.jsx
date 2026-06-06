import RevealWrapper from '../Common/RevealWrapper';
import { contactLinks, cgpa } from '../../data/contact';
import styles from './Contact.module.css';

export default function Contact() {
  // Helper to format contact cards into stylized terminal actions
  const getTerminalAction = (link) => {
    if (link.href.startsWith('mailto:')) {
      return `ssh ${link.label}`;
    }
    if (link.href.startsWith('tel:')) {
      return `call ${link.label.replace(' ', '')}`;
    }
    if (link.href.includes('github.com')) {
      return `git clone https://${link.label}`;
    }
    if (link.href.includes('linkedin.com')) {
      return `ping ${link.label}`;
    }
    return `connect ${link.label}`;
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Telemetry Specs */}
          <div className={styles.leftCol}>
            <RevealWrapper>
              <span className={styles.overline}>[ CONSOLE CONNECTION ]</span>
              <h2 className={styles.heading}>INITIATE TRANSMISSION</h2>
            </RevealWrapper>

            {/* Systems Telemetry Experience Card */}
            <RevealWrapper className={styles.cgpaBlock} delay={0.1} direction="up" data-cursor-hover>
              <div className={styles.cgpaLeft}>
                <div className={styles.cgpaLabel}>EVALUATION PROFILE</div>
                <div className={styles.cgpaValue}>{cgpa.value}</div>
              </div>
              <div className={styles.cgpaRight}>
                <span className={styles.cgpaSub}>{cgpa.label}</span>
              </div>
            </RevealWrapper>
          </div>

          {/* Right Column: Interactive Sci-Fi Social Connections */}
          <div className={styles.rightCol}>
            <RevealWrapper>
              <h3 className={styles.socialHeading}>[ DIRECT SOCKETS ]</h3>
              <p className={styles.socialSub}>
                Execute the standard terminal calls below to establish peer-to-peer tunnels.
              </p>
            </RevealWrapper>

            <div className={styles.linksGrid}>
              {contactLinks.map((link, i) => (
                <RevealWrapper
                  key={i}
                  className={styles.revealWrapper}
                  delay={i * 0.08 + 0.15}
                  direction="left"
                >
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className={styles.contactCard}
                    data-cursor-hover
                  >
                    <span className={styles.cardPrompt}>$ {getTerminalAction(link)}</span>
                    <span className={styles.cardArrow}>EXEC →</span>
                  </a>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
