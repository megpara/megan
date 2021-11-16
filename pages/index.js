import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const sites = [
  {
    title: "Volta Collective",
    link: "https://www.voltacollective.com",
    thumbnail: "/voltacollective.png",
  },
  {
    title: "Gabrielle Johnson Yoga",
    link: "https://www.gabriellejohnsonyoga.com",
    thumbnail: "/gjyoga.png",
  },
  {
    title: "Media Forge",
    link: "https://www.mediaforgepro.com",
    thumbnail: "/mediaforge.png",
  },
  {
    title: "Catherine Parenteau",
    link: "https://catherineparenteau.com",
    thumbnail: "/catherineparenteau.png",
  },
];
export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        {/* <div className={styles.nav}>
          <div className={`${styles.navItem} ${styles.topNav}`}>Work</div>
          <div className={`${styles.navItem} ${styles.rightNav}`}>About</div>
          <div className={`${styles.navItem} ${styles.bottomNav}`}>
            Get in touch
          </div>
        </div> */}
        <img className={styles.emailIcon} src="/email_icon.png" />
        <div className={styles.titleDiv}>
          <div className={styles.circle} />
          <div className={styles.title}>Megan Paradowski</div>
          <div className={styles.subtitle}>Web Developer</div>
        </div>
        <div className={styles.sites}>
          <div className={styles.sitesTitle}>Sites</div>
          <div className={styles.siteList}>
            {sites.map((site) => (
              <div className={styles.listItem} key={site.title}>
                <a href={site.link} target="_blank">
                  <img className={styles.thumbnail} src={site.thumbnail} />
                  <div className={styles.normalText}>{site.title}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
