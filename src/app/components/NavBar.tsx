"use client";

import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import Image from "next/image";

function handleClick() {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank",
  );
}

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Lado izquierdo: Logo */}
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image
            src="/logo_pravice.png"
            alt="Logo Pravice"
            width={80}
            height={80}
          />
        </div>
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
        <button className={styles.cta} onClick={handleClick}>
          Solicitar asesoría
        </button>
      </div>
    </nav>
  );
}
