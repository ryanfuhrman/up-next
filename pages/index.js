import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Up Next | Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Up Next!</h1>

        <p className={styles.description}>
          A to-do list built to keep you moving on to whatever is up next. Damn
          that's cheesy! 🧀🧀🧀
        </p>
      </main>

      <footer className={styles.footer}>Powered by ☕️</footer>
    </div>
  );
}
