import RevealWrapper from '../Common/RevealWrapper';
import Button from '../Common/Button';
import { marketingCards } from '../../data/contact';
import styles from './Marketing.module.css';

export default function Marketing() {
  return (
    <section id="marketing" className={styles.section}>
      {/* Visual Background Art */}
      <div className={styles.art} aria-hidden="true">
        <div className={styles.circle} />
        <div className={styles.glow} />
      </div>

      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Side: Copywriting CTA */}
          <div className={styles.leftCol}>
            <RevealWrapper>
              <span className={styles.overline}>AI RESEARCH & SOLUTIONS</span>
              <h2 className={styles.heading}>
                BRIDGING RESEARCH <span className={styles.gradientText}>WITH REAL IMPACT</span>
              </h2>
            </RevealWrapper>

            <RevealWrapper className={styles.descWrapper} delay={0.1}>
              <p className={styles.desc}>
                From engineering speech intelligence models in clinical labs to optimizing
                generative try-on diffusion pipelines, I specialize in bringing state-of-the-art
                deep learning models into production-level environments.
              </p>
            </RevealWrapper>

            <RevealWrapper className={styles.btnRow} delay={0.2} direction="up">
              <Button variant="filled" href="#contact" data-cursor-hover>
                Get In Touch
              </Button>
              <Button variant="outline" href="#experience" data-cursor-hover>
                View Experience
              </Button>
            </RevealWrapper>
          </div>

          {/* Right Side: Key Achievements floating cards */}
          <div className={styles.rightCol}>
            <div className={styles.cardsStack}>
              {marketingCards.map((card, i) => (
                <RevealWrapper
                  key={i}
                  className={styles.card}
                  delay={i * 0.1}
                  direction="left"
                  data-cursor-hover
                >
                  <div className={styles.cardIndicator} />
                  <div className={styles.cardContent}>
                    <span className={styles.cardLabel}>{card.label}</span>
                    <h3 className={styles.cardValue}>{card.value}</h3>
                    <p className={styles.cardSub}>{card.sub}</p>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
