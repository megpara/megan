import styles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <a className={styles.emailIcon} href="mailto:meganparadowski@gmail.com">
        <img src="/email_icon.png" />
      </a>
      <div className={styles.navItem}>
        <a href="/about">Web design & development</a>
      </div>
      <div className={styles.navItemBottomContainer}>
        <div className={`${styles.navItem} ${styles.navItemBottom}`}>
          <a href="/about">About</a>
        </div>
        <div className={`${styles.navItem} ${styles.navItemBottom}`}>
          <a href="/about">work</a>
        </div>
      </div>
    </div>
  );
}
