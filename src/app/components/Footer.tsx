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
        <p>2026 © Derechos reservados Pravice Abogados</p>
      </footer>

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
          href="https://www.instagram.com/pravice_abogados/ "
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
