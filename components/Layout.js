import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Head>
        <title>Megan Paradowski</title>
        <meta name="description" content="Megan Paradowski" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/flowers2.png" as="image" />
        <link rel="preload" href="/selfie.jpg" as="image" />
        <link rel="stylesheet" href="https://use.typekit.net/djh6oaj.css" />
      </Head>
      {children}
    </div>
  );
}
