import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main style={{ marginTop: "70px" }}>
      <NavBar />
      <section id="inicio">
        <Hero />
      </section>
      <section id="servicios">
        <Services />
      </section>
      <section id="nosotros">
        <About />
      </section>
      <section id="contacto">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
