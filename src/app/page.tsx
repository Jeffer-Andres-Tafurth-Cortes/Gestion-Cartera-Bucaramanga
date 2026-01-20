import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className={styles.main}>
        <section id="inicio" className={styles.section}>
          <Hero />
        </section>

        <section id="servicios" className={styles.section}>
          <Services />
        </section>

        <section id="nosotros" className={styles.section}>
          <About />
        </section>

        <section id="contacto" className={styles.section}>
          <Contact />
        </section>

        <Footer />
      </main>
    </>
  );
}
