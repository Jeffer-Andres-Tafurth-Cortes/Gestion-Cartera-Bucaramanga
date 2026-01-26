import styles from "../styles/Footer.module.css";
import {
  faWhatsapp,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.brand}>
            <h4>Pravice Abogados</h4>
            <p>
              Firma especializada en gestión de carteras, derecho laboral y
              asesoría jurídica integral en Bucaramanga y el área metropolitana.
            </p>
          </div>

          <div className={styles.contactInfo}>
            <p>
              <strong>Dirección:</strong> Bucaramanga, Santander, Colombia
            </p>
            <p>
              <strong>Correo:</strong>{" "}
              <a href="mailto:contacto@praviceabogados.com">
                contacto@praviceabogados.com
              </a>
            </p>
            <p>
              <strong>Teléfono:</strong>{" "}
              <a href="tel:+573000000000">+57 300 000 0000</a>
            </p>
          </div>
        </div>

        <div className={styles.copy}>
          <p>© 2026 Pravice Abogados. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Redes sociales flotantes (SIN CAMBIOS) */}
      <div className={styles.socialFloating}>
        <a
          href="https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0"
          aria-label="WhatsApp"
          className={`${styles.social} ${styles.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.icon}>
            <FontAwesomeIcon icon={faWhatsapp} />
          </span>
        </a>

        <a
          href="https://www.instagram.com/pravice_abogados/"
          aria-label="Instagram"
          className={`${styles.social} ${styles.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.icon}>
            <FontAwesomeIcon icon={faInstagram} />
          </span>
        </a>

        <a
          href="https://www.linkedin.com/company/praviceabogadosespecializados/"
          aria-label="LinkedIn"
          className={`${styles.social} ${styles.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.icon}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </span>
        </a>
      </div>
    </>
  );
}
