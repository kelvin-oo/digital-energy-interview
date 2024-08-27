import Image from "next/image";
import Link from "next/link";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.homeMain}>
          <h1>Digital Energy Software Dev Assessment</h1>
          <h1>Kelvin's Solution</h1>
        </section>
        <section className={styles.links}>
          <Link href="/first-implementation">First Implementation</Link>
          <Link href="/second-implementation">Second Implementation</Link>
        </section>
        <footer className={styles.footer}>
        <a href="https://github.com/kelvin-oo/digital-energy-interview">Github</a>
          <span></span>
          <a href="">hiheykelvin@gmail.com</a>
        </footer>
      </main>
    </>
  );
}
