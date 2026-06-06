import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.copy}>
          &copy; 2026 Kanishk Pandey &middot; 23BDS027 &middot; IIIT Dharwad
        </span>
        <span className={styles.name}>
          B.Tech DS &amp; AI
        </span>
      </div>
    </footer>
  );
}
