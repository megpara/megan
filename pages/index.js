import { useState } from "react";
import About from "../components/About";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";
import Sites from "../components/Sites";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const siteVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 1, scale: 0 },
};

export default function Home() {
  const [openAbout, setOpenAbout] = useState(false);
  const toggleAbout = () => {
    setOpenAbout(!openAbout);
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <Layout>
      <main className={styles.main}>
        <Nav toggle={toggleAbout} />
        <div className={styles.titleDiv}>
          <div className={styles.absoluteDiv}>
            {!openAbout && (
              <div className={styles.circle}>
                <div className={styles.circleText}>
                  <div
                    className={styles.primaryTitle}
                    style={{ color: "white" }}
                  >
                    Megan Paradowski
                  </div>
                </div>
              </div>
            )}
            <div className={styles.primaryTitleContainer}>
              <div className={styles.primaryTitle}>Megan Paradowski</div>
              {openAbout && <About />}
            </div>
          </div>
        </div>
        {/* <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={siteVariants}
          className="sites"
        > */}
        <Sites />
        {/* </motion.div> */}
      </main>
    </Layout>
  );
}
