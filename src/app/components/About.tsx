import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.text}>
        <h2>Sobre Nosotros</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className={styles.imagePlaceholder}></div>
    </section>
  );
}
