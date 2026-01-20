"use client";

import styles from "../styles/Services.module.css";
import { motion } from "framer-motion";

const services = [
  {
    title: "Recuperación de cartera",
    description:
      "Implementamos estrategias orientadas a la recuperación efectiva de obligaciones vencidas, priorizando la negociación y el cumplimiento.",
  },
  {
    title: "Gestión de cartera",
    description:
      "Administramos y supervisamos procesos de cartera con seguimiento constante, reportes claros y control de cada etapa.",
  },
  {
    title: "Recaudo de cartera",
    description:
      "Ejecutamos procesos de recaudo estructurados que facilitan el pago oportuno y reducen los índices de morosidad.",
  },
  {
    title: "Cobro de cartera",
    description:
      "Desarrollamos acciones de cobro bajo lineamientos legales, garantizando transparencia y trato responsable.",
  },
];

export default function Services() {
  return (
    <motion.section
      className={styles.services}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Nuestros servicios
      </motion.h2>

      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.card}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              },
            }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
