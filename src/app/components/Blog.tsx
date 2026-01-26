"use client";

import Link from "next/link";
import styles from "../styles/Blog.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

/* ======================
   ANIMATION VARIANTS
====================== */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Blog() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* ======================
            HEADER
        ====================== */}
        <motion.header
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2>Actualidad en gestión de cartera en Bucaramanga</h2>
          <p>
            Análisis, novedades legales y recomendaciones prácticas sobre
            recuperación de cartera, cobranzas y procesos jurídicos en
            Bucaramanga y Santander.
          </p>
        </motion.header>

        {/* ======================
            ARTÍCULO DESTACADO
        ====================== */}
        <motion.article
          className={styles.featured}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className={styles.featuredImage}
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/dineroColombia.jpg"
              fill
              alt="Imagen destacada del blog sobre gestión de cartera en Bucaramanga"
              className={styles.image}
            />
          </motion.div>

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
        </motion.article>

        {/* ======================
            LISTADO EDITORIAL
        ====================== */}
        <motion.div
          className={styles.list}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.article className={styles.item} variants={fadeUp}>
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
          </motion.article>

          <motion.article className={styles.item} variants={fadeUp}>
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
          </motion.article>

          <motion.article className={styles.item} variants={fadeUp}>
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
          </motion.article>
        </motion.div>

        {/* ======================
            FOOTER
        ====================== */}
        <motion.footer
          className={styles.footer}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/novedades" className={styles.allArticles}>
            Ver todas las novedades →
          </Link>
        </motion.footer>
      </div>
    </section>
  );
}
