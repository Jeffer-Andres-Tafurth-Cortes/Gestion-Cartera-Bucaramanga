"use client";

import styles from "../styles/Services.module.css";
import { motion } from "framer-motion";

const services = [
  {
    title: "Recuperación de cartera en Bucaramanga",
    description:
      "Apoyamos a empresas y personas naturales en Bucaramanga en la recuperación de obligaciones vencidas, priorizando la negociación responsable y la normalización de la cartera sin afectar la relación comercial.",
  },
  {
    title: "Gestión integral de cartera",
    description:
      "Administramos procesos de cartera para empresas de Bucaramanga y Santander, con seguimiento constante, control de cada etapa y reportes claros que facilitan la toma de decisiones.",
  },
  {
    title: "Recaudo de cartera",
    description:
      "Implementamos estrategias de recaudo estructuradas que permiten reducir la morosidad y facilitar el pago oportuno, adaptadas a la realidad económica y comercial de Bucaramanga.",
  },
  {
    title: "Cobro de cartera prejurídico y jurídico",
    description:
      "Desarrollamos procesos de cobro de cartera bajo lineamientos legales vigentes en Colombia, garantizando un trato respetuoso, transparente y acorde a la normativa aplicable.",
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
        id="servicios-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Servicios de gestión y recuperación de cartera en Bucaramanga
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
