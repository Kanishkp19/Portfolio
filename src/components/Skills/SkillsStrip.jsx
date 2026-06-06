import Marquee from '../Common/Marquee';
import { skillsMarqueeItems } from '../../data/skills';
import styles from './SkillsStrip.module.css';

export default function SkillsStrip() {
  return (
    <div id="skills-strip" className={styles.skillsStrip}>
      <Marquee
        items={skillsMarqueeItems}
        speed="18s"
        direction="fwd"
        separator=" · "
        className={styles.marquee}
        itemClassName={styles.skItem}
      />
    </div>
  );
}
