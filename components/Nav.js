import styles from "../styles/Nav.module.css";

export default function Nav({ toggle }) {
  return (
    <div className={styles.nav}>
      <div className={styles.navItem}>Web design & development</div>
      {/* <a
        className={`${styles.navItem} ${styles.emailIcon}`}
        href="mailto:meganparadowski@gmail.com"
      >
        <img src="/email_icon.png" />
      </a> */}
      <div className={styles.navItemRightContainer}>
        <button
          className={`${styles.navItem} ${styles.navItemBottom} ${styles.button}`}
          onMouseEnter={toggle}
          onMouseLeave={toggle}
        >
          About
        </button>
        <button
          className={`${styles.navItem}`}
          onClick={() => {
            window.scrollTo(0, window.innerHeight);
          }}
        >
          Projects
          <sup>4</sup>
        </button>
      </div>
    </div>
  );
}
