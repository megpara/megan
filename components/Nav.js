import { motion } from "framer-motion";
import styles from "../styles/Nav.module.css";

export default function Nav({ toggle }) {
  return (
    <div className={styles.nav}>
      <div className={styles.navItemTitle}>WEB DESIGN and DEVELOPMENT</div>
      <div className={`${styles.navItem} ${styles.navItemSubtitle}`}>
        based in Los Angeles, CA
      </div>
      {/* <a
        className={`${styles.navItem} ${styles.emailIcon}`}
        href="mailto:meganparadowski@gmail.com"
      >
        <img src="/email_icon.png" />
      </a> */}
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
          Projects
          <sup>(4)</sup>
        </button>
      </div>
    </div>
  );
}
