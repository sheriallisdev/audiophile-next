import styles from "./Navbar.module.scss";
import Link from "next/link";

import { Logo, Container } from "@components/ui";
import { ShoppingCart, Hamburger } from "@components/icons";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Container className={styles.navbarContainer}>
        <div className={styles.hamburgerMenu}>
          <Hamburger />
        </div>
        <Link href="/">
          <a className={styles.logo}>
            <Logo />
          </a>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.mainNav}>
            <NavLinks />
          </ul>
        </nav>

        <div className={styles.cartContainer}>
          <ShoppingCart />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
