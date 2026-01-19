import styles from "../styles/Services.module.css";

export default function Services() {
  return (
    <section className={styles.services}>
      <h2>Nuestros Servicios</h2>
      <div className={styles.grid}>
        <div className={styles.card}>RECUPERACION DE CARTERA</div>
        <div className={styles.card}>GESTION DE CARTERA</div>
        <div className={styles.card}>RECUADO DE CARTERA</div>
        <div className={styles.card}>COBRO DE CARTERA</div>
      </div>
    </section>
  );
}
