import { useEffect, useState } from "react";
import About from "../components/About";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";
import Sites from "../components/Sites";
import { AnimatePresence, motion } from "framer-motion";
import EmailIcon from "../components/EmailIcon";

export default function Home() {
  const [openAbout, setOpenAbout] = useState(false);
  const [showScroll, setShowScroll] = useState(true);
  const toggleAbout = () => {
    setOpenAbout(!openAbout);
  };
  useEffect(() => {
    function onScroll() {
      if (window.scrollY == 0) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    }
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <Layout>
      <main className={styles.main}>
        {showScroll && <Nav toggle={toggleAbout} />}
        <div className={styles.titleDiv}>
          <div className={styles.absoluteDiv}>
            <AnimatePresence>
              {!openAbout && (
                <motion.div
                  className={styles.circle}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ ease: "easeOut", duration: "2" }}
                >
                  <div className={styles.circleText}>
                    <div
                      className={styles.primaryTitle}
                      style={{ color: "white" }}
                    >
                      Megan Paradowski
                    </div>
                  </div>
                  <AnimatePresence>
                    {showScroll && (
                      <motion.div
                        className={styles.scroll}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeIn", duration: "0.5" }}
                      >
                        SCROLL to EXPLORE
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
            <div className={styles.primaryTitleContainer}>
              {!openAbout && (
                <div className={styles.primaryTitle}>Megan Paradowski</div>
              )}
              {openAbout && (
                <div className={styles.primaryTitle} style={{ color: "white" }}>
                  Megan Paradowski
                </div>
              )}
              {openAbout && <About />}
            </div>
          </div>
        </div>
        <AnimatePresence>{showScroll && <EmailIcon />}</AnimatePresence>
        <Sites />
        <button
          className={styles.backButton}
          onClick={() => {
            scrollTo(0, 0);
          }}
        >
          Back to top
        </button>
        <div className={styles.footer}>
          <div className={styles.footerColumn}>
            <div className={styles.footerTitle}>
              Reach out, I'd love to hear from you.
            </div>
            <div className={styles.footerText}>
              Connect with me to collaborate, or just to chat.
            </div>
            <div className={styles.footerLink}>
              <a href="mailto:meganparadowski@gmail.com">
                meganparadowski@gmail.com
              </a>
            </div>
          </div>
          <div className={styles.footerColumn} />
          <div className={styles.footerColumn}>
            <div className={styles.bottomRight}>
              <div className={styles.footerText}>
                Interested in contemporary dance?
              </div>
              <div className={styles.footerLink}>
                <a target="_blank" href="http://www.voltacollective.com">
                  voltacollective.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
