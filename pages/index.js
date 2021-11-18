import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Sites from "../components/Sites";
import styles from "../styles/Home.module.css";

const sites = [
  {
    title: "Volta Collective",
    link: "https://www.voltacollective.com",
    thumbnail: "/voltacollective.png",
    location: "Los Angeles, CA",
  },
  {
    title: "Gabrielle Johnson Yoga",
    link: "https://www.gabriellejohnsonyoga.com",
    thumbnail: "/gjyoga.png",
    location: "Nashville, TN",
  },
  {
    title: "Media Forge",
    link: "https://www.mediaforgepro.com",
    thumbnail: "/mediaforge.png",
    location: "Los Angeles, CA",
  },
  {
    title: "Catherine Parenteau",
    link: "https://catherineparenteau.com",
    thumbnail: "/catherineparenteau.png",
    location: "Naples, FL",
  },
];
export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <Nav />
        <div className={styles.titleDiv}>
          <div className={styles.absoluteDiv}>
            <div className={styles.circle}>
              <div className={styles.circleText}>
                <div className={styles.primaryTitle} style={{ color: "white" }}>
                  Megan Paradowski
                </div>
              </div>
            </div>
            <div className={styles.primaryTitleContainer}>
              <div className={styles.primaryTitle}>Megan Paradowski</div>
            </div>
            {/* <div className={styles.secondaryTitleContainer}>
              <div className={styles.secondaryTitle}>
                Web Designer / Developer
              </div>
            </div> */}
          </div>
        </div>
        <Sites />
      </main>
    </Layout>
  );
}
