import styles from "./Navbar.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Logo, Container } from "@components/ui";
import { ShoppingCart, Hamburger } from "@components/icons";
import NavLinks from "./NavLinks";
import { MobileMenu } from "@components/common";

const Navbar = () => {
  const router = useRouter();
  const [open, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(!open);
  };

  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);

    router.events.on("routeChangeStart", handleRouteChange);

    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router.events]);

  return (
    <>
      <div className={styles.navbar}>
        <Container className={styles.navbarContainer}>
          <button className={styles.hamburgerMenu} onClick={handleMenuOpen}>
            <Hamburger />
          </button>
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
      {open && <MobileMenu />}
    </>
  );
};

export default Navbar;
