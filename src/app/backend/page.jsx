import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/backend.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.homeMain}>
          <h1>Digital Energy Software Dev Assessment</h1>
          <h1>Kelvin's Solution (Backend)</h1>
        </section>
        <section className={styles.links}>
         <div className={styles.first}>
         <h1>First Implementation:</h1>
         <p>I used express Js</p>
         <p>Deployed on render.com</p>
         <p><Link href="https://github.com/kelvin-oo/digital-energy-software-assessment-backend">View on Github</Link></p>
         <p><Link href="https://digital-energy-software-assessment.onrender.com/fetch-object/3">View live</Link></p>
         </div>
         <div className={styles.second}>
         <h1>Second Implementation:</h1>
         <p>I used Next Js Api routes</p>
         <p>Deployed on vercel</p>
         <p><Link href="https://github.com/kelvin-oo/digital-energy-interview/tree/master/src/api">View on Github</Link></p>
         <p><Link href="https://digital-energy-interview.vercel.app/api/fetch-object/8">Link</Link></p>
         </div>
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
