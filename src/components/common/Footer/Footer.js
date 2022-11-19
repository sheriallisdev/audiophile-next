import Link from "next/link";
import { Facebook, Instagram, Twitter } from "@components/icons";
import { Container, Logo } from "@components/ui";
import NavLinks from "../Navbar/NavLinks";
import styles from "./Footer.module.scss";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className={styles.siteFooter}>
      <Container className={styles.footerContainer}>
        <Logo className={styles.footerLogo} />
        <nav>
          <NavLinks className={styles.footerNav} />
        </nav>
        <p className={styles.description}>
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we’re open 7 days a week.
        </p>
        <p className={styles.copyright}>
          Copyright {currentYear}. All Rights Reserved
        </p>
        <div className={styles.socialsContainer}>
          <Link href="/">
            <a className={styles.socialLink} aria-label="Visit us on Facebook">
              <Facebook className={styles.icon} />
            </a>
          </Link>
          <Link href="/">
            <a className={styles.socialLink} aria-label="Visit us on Twitter">
              <Twitter className={styles.icon} />
            </a>
          </Link>
          <Link href="/">
            <a className={styles.socialLink} aria-label="Visit us on Instagram">
              <Instagram className={styles.icon} />
            </a>
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
