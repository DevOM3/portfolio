import Head from "next/head";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DevOM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.parallax}></div>
    </div>
  );
}
