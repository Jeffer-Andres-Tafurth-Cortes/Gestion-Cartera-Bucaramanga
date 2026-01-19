import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2>Contacto</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo" />
        <textarea placeholder="Mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
