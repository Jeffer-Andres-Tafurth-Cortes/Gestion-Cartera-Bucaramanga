import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>GESTION DE CARTERA</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Contáctanos</button>
      </div>
      <div className={styles.imagePlaceholder}></div>
    </section>
  );
}
