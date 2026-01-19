"use client";

import Link from "next/link";
import styles from "../styles/NavBar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Lado izquierdo: Logo */}
      <div className={styles.left}>
        <div className={styles.logo}>LOGO</div>
      </div>

      {/* Centro: Menú */}
      <ul className={styles.center}>
        <li>
          <Link href="#inicio">Inicio</Link>
        </li>
        <li>
          <Link href="#servicios">Servicios</Link>
        </li>
        <li>
          <Link href="#nosotros">Nosotros</Link>
        </li>
        <li>
          <Link href="#contacto">Contacto</Link>
        </li>
      </ul>

      {/* Lado derecho: CTA */}
      <div className={styles.right}>
        <button className={styles.cta}>Asesoría</button>
      </div>
    </nav>
  );
}
