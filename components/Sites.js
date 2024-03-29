import styles from "../styles/Sites.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const sites = [
  {
    title: "Ellis Custom Homes",
    link: "https://ech-development.vercel.app/",
    thumbnail: "/keith.png",
    description: "Web design & development",
    location: "College Station, TX",
  },
  {
    title: "Catherine Parenteau",
    link: "https://catherineparenteau.com",
    thumbnail: "/catherineparenteau.png",
    description: "Shopify design & development",
    location: "Naples, FL",
  },
  {
    title: "Volta Collective",
    link: "https://www.voltacollective.com",
    thumbnail: "/voltacollective.png",
    description: "Web design & development",
    location: "Los Angeles, CA",
  },
  {
    title: "Media Forge",
    link: "https://www.mediaforgepro.com",
    thumbnail: "/mediaforge.png",
    description: "Web design & development",
    location: "Los Angeles, CA",
  },
  {
    title: "Happy Deals",
    link: "https://findhappydeals.com/",
    thumbnail: "/hd.png",
    description: "Data integration and development",
    location: "",
  },
  {
    title: "Avery Ellis Interiors",
    link: "https://www.averyellisinteriors.com/",
    thumbnail: "/avery.png",
    description: "Web design & development",
    location: "College Station, TX",
  },
  {
    title: "Performance Events Website",
    link: "https://mona.vercel.app/",
    thumbnail: "/mona.png",
    description: "Web design & development",
    location: "Los Angeles, CA",
  },
  {
    title: "Gabrielle Johnson Yoga",
    link: "https://gabrielle-psi.vercel.app/",
    thumbnail: "/gabrielle.png",
    description: "Web design & development",
    location: "Nashville, TN",
  },
];

const Card = ({ site, children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!inView) {
      controls.start("hidden");
    }
  }, [inView]);

  const siteVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.9 },
  };

  return (
    <motion.div
      className={styles.listItem}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={siteVariants}
      style={!site.title && { backgroundColor: "#f3f3f5" }}
    >
      {children}
    </motion.div>
  );
};
export default function Sites() {
  return (
    <div className={styles.sites}>
      <div className={styles.siteList}>
        {sites.map((site) => (
          <Card site={site} key={site.title}>
            <a href={site.link} target="_blank">
              <motion.div
                whileHover={{
                  scale: 1.03,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className={styles.images}>
                  <img className={styles.thumbnail} src={site.thumbnail} />
                  <img className={styles.linkIcon} src="/link_icon.png" />
                </div>
              </motion.div>
              <div className={styles.siteText}>
                <div className={styles.titleLocation}>
                  <div className={styles.siteTitle}>{site.title}</div>
                  <div className={styles.siteDescription}>
                    {site.description}
                  </div>
                </div>
                <div className={styles.siteLocation}>{site.location}</div>
              </div>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}
