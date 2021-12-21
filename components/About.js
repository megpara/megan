import styles from "../styles/About.module.css";
import { motion } from "framer-motion";

export default function About({}) {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: "2" }}
    >
      <img src="/selfie.jpg" />
      <div className={styles.text}>
        is a web designer & developer with a background in backend programming.
        She is also the co-founder of Volta Collective, a Los Angeles based
        contemporary dance theatre company.
      </div>
    </motion.div>
  );
}
