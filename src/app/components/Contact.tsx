"use client";

import styles from "../styles/Contact.module.css";
import { motion } from "framer-motion";

function handleClick() {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank",
  );
}

export default function Contact() {
  return (
    <motion.section
      className={styles.contact}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* ======================
          CTA
      ====================== */}
      <motion.div
        className={styles.ctaBox}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          id="contacto-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          ¿Necesita asesoría en gestión de cartera?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          Nuestro equipo está preparado para brindarle una orientación clara y
          responsable, ajustada a sus necesidades y a la normativa vigente en
          Bucaramanga.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          onClick={handleClick}
        >
          Solicitar asesoría
        </motion.button>
      </motion.div>

      {/* ======================
          MAPA
      ====================== */}
      <motion.div
        className={styles.mapBox}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3>Nuestra ubicación</h3>

        <div className={styles.mapWrapper}>
          <iframe
            title="Ubicación Bucaramanga"
            src="https://www.google.com/maps?q=Bucaramanga,+Santander,+Colombia&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
