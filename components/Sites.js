import styles from "../styles/Sites.module.css";

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

export default function Sites() {
  return (
    <div className={styles.sites}>
      <div className={styles.siteList}>
        {sites.map((site) => (
          <div className={styles.listItem} key={site.title}>
            <a href={site.link} target="_blank">
              <img className={styles.linkIcon} src="/link_icon.png" />
            </a>
            <a href={site.link} target="_blank">
              <img className={styles.thumbnail} src={site.thumbnail} />
              <div className={styles.siteText}>
                <div className={styles.siteTitle}>{site.title}</div>
                <div className={styles.siteLocation}>{site.location}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
