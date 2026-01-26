import Link from "next/link";
import styles from "../styles/Blog.module.css";

export default function Blog() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* ======================
            HEADER
        ====================== */}
        <header className={styles.header}>
          <h2>Actualidad en gestión de cartera en Bucaramanga</h2>
          <p>
            Análisis, novedades legales y recomendaciones prácticas sobre
            recuperación de cartera, cobranzas y procesos jurídicos en
            Bucaramanga y Santander.
          </p>
        </header>

        {/* ======================
            ARTÍCULO DESTACADO
        ====================== */}
        <article className={styles.featured}>
          <div className={styles.featuredImage} />
          <div className={styles.featuredContent}>
            <span className={styles.tag}>Bucaramanga</span>
            <h3>
              ¿Cómo recuperar cartera vencida en Bucaramanga sin afectar la
              relación comercial?
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. En el
              contexto empresarial de Bucaramanga, una gestión estratégica de
              cartera es clave.
            </p>

            <Link
              href="/novedades/recuperar-cartera-bucaramanga"
              className={styles.readMore}
            >
              Leer análisis completo →
            </Link>
          </div>
        </article>

        {/* ======================
            LISTADO EDITORIAL
        ====================== */}
        <div className={styles.list}>
          <article className={styles.item}>
            <span className={styles.date}>Bucaramanga · Enero 2026</span>
            <h4>Procesos jurídicos para el cobro de cartera en Santander</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Analizamos los mecanismos legales más utilizados en Bucaramanga
              para la recuperación efectiva de cartera.
            </p>
            <Link href="/novedades/cobro-juridico-santander">
              Leer artículo →
            </Link>
          </article>

          <article className={styles.item}>
            <span className={styles.date}>Bucaramanga · Diciembre 2025</span>
            <h4>
              Errores frecuentes en la gestión de cartera empresarial en
              Bucaramanga
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Muchos
              empresarios en Bucaramanga cometen errores que afectan la
              recuperación de su cartera.
            </p>
            <Link href="/novedades/errores-gestion-cartera-bucaramanga">
              Leer artículo →
            </Link>
          </article>

          <article className={styles.item}>
            <span className={styles.date}>Bucaramanga · Noviembre 2025</span>
            <h4>¿Cuándo es recomendable iniciar un cobro prejurídico?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Te
              explicamos cuándo iniciar un cobro prejurídico en Bucaramanga y
              cómo hacerlo correctamente.
            </p>
            <Link href="/novedades/cobro-prejuridico-bucaramanga">
              Leer artículo →
            </Link>
          </article>
        </div>

        {/* ======================
            FOOTER
        ====================== */}
        <footer className={styles.footer}>
          <Link href="/novedades" className={styles.allArticles}>
            Ver todas las novedades →
          </Link>
        </footer>
      </div>
    </section>
  );
}
