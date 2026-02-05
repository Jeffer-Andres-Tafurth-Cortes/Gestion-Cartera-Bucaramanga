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
          <h2 id="blog-title">Actualidad en gestión de cartera en Colombia</h2>
          <p>
            Análisis, novedades legales y recomendaciones prácticas sobre
            recuperación de cartera, cobranzas y procesos jurídicos en el
            contexto económico colombiano.
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
              alt="Gestión de cartera y obligaciones financieras en Colombia"
              className={styles.image}
            />
          </motion.div>

          <div className={styles.featuredContent}>
            <span className={styles.tag}>Colombia</span>
            <span className={styles.date}>Agosto 2025</span>

            <h3>
              ¿Cómo recuperar cartera vencida en Colombia sin afectar la
              relación comercial?
            </h3>

            <p>
              En 2025, la DIAN anunció una estrategia nacional orientada a la
              recuperación de más de $2,2 billones en cartera vencida,
              apoyándose en análisis de datos y procesos de priorización de
              obligaciones. Esta iniciativa buscó fortalecer la liquidez del
              sistema económico y reducir los niveles de morosidad.
            </p>

            <p>
              Aunque se trata de una acción de alcance nacional, este tipo de
              medidas evidencian la importancia de contar con estrategias
              estructuradas de gestión de cartera, aplicables tanto a entidades
              públicas como a empresas y personas naturales en Colombia.
            </p>

            <Link
              href="https://incp.org.co/publicaciones/infoincp-publicaciones/impuestos/2025/08/dian-busca-recuperar-mas-de-22-billones-de-su-cartera-vencida"
              target="_blank"
              rel="noopener noreferrer"
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
            <span className={styles.date}>Colombia · Enero 2026</span>

            <h4>
              Corte Constitucional ordena depurar cartera vencida en el sector
              salud
            </h4>

            <p>
              A comienzos de 2026, la Corte Constitucional ordenó al Ministerio
              de Salud adoptar medidas para depurar la cartera vencida del
              sistema, resaltando el impacto que estos pasivos tienen sobre la
              sostenibilidad y continuidad de los servicios. La decisión pone de
              relieve la relevancia de una gestión de cartera eficiente en
              sectores estratégicos.
            </p>

            <Link
              href="https://www.noticiasrcn.com/salud-y-bienestar/corte-constitucional-le-ordena-al-ministerio-de-salud-depurar-cartera-vencida-941875"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer artículo →
            </Link>
          </motion.article>

          <motion.article className={styles.item} variants={fadeUp}>
            <span className={styles.date}>Colombia · Diciembre 2025</span>

            <h4>
              Indicadores de cartera vencida en Colombia muestran ajustes
              durante 2025
            </h4>

            <p>
              Durante 2025, el comportamiento de la cartera vencida en Colombia
              presentó señales mixtas. Aunque algunos segmentos mostraron
              mejoras, el indicador de mora superior a 30 días se mantuvo en
              niveles cercanos al 4,7 %, reflejando la necesidad de fortalecer
              las estrategias de recuperación y control del riesgo crediticio.
            </p>

            <Link
              href="https://cicloderiesgo.com/colombia/viviendo-el-credito/contenida-arranco-la-cartera-vencida-en-colombia-este-2025-con-el-47"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer artículo →
            </Link>
          </motion.article>

          <motion.article className={styles.item} variants={fadeUp}>
            <span className={styles.date}>Colombia · Noviembre 2025</span>

            <h4>
              Durante 2025 se consolidaron señales de recuperación del crédito
              en Colombia
            </h4>

            <p>
              En el segundo semestre de 2025, expertos del sector financiero
              señalaron que comenzaron a evidenciarse signos de recuperación del
              crédito en Colombia. Proyecciones de Asobancaria indicaron un
              crecimiento moderado de la cartera crediticia, acompañado de una
              reducción gradual en los niveles de mora.
            </p>

            <Link
              href="https://www.eltiempo.com/economia/sector-financiero/en-2025-se-consolidara-la-recuperacion-del-sector-con-crecimiento-de-2-5-en-la-cartera-crediticia-dice-presidente-de-asobancaria-3382747"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer artículo →
            </Link>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
