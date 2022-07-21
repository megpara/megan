import styles from "../styles/Nav.module.css";

export default function Nav({ toggle }) {
  return (
    <div className={styles.nav}>
      <div className={styles.navItemTitle}>Web design & development</div>
      <div className={`${styles.navItem} ${styles.navItemSubtitle}`}>
        based in Los Angeles, CA
      </div>
      <div className={styles.navItemRightContainer}>
        <button className={styles.navItem} onClick={toggle}>
          About
        </button>
        <button
          className={`${styles.navItem} ${styles.navItemProjects}`}
          onClick={() => {
            window.scrollTo(0, window.innerHeight);
          }}
        >
          Featured
          <sup>(9)</sup>
        </button>
      </div>
    </div>
  );
}
