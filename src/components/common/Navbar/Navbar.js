import styles from "./Navbar.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Logo, Container } from "@components/ui";
import { ShoppingCart, Hamburger } from "@components/icons";
import NavLinks from "./NavLinks";
import { MobileMenu } from "@components/common";
import { Cart } from "@components/cart";

const Navbar = () => {
  const router = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuIsOpen(!menuIsOpen);
    if (cartIsOpen) setCartIsOpen(!cartIsOpen);
  };

  const handleCartOpen = () => {
    setCartIsOpen(!cartIsOpen);
    if (menuIsOpen) setMenuIsOpen(!menuIsOpen);
  };

  const handleCartClose = () => {
    setCartIsOpen(false);
  };

  useEffect(() => {
    const handleRouteChange = () => setMenuIsOpen(false);

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
            <button className={styles.cartMenu} onClick={handleCartOpen}>
              <ShoppingCart />
            </button>
          </div>
        </Container>
      </div>
      {menuIsOpen && <MobileMenu />}
      {cartIsOpen && <Cart handleCartClose={handleCartClose} />}
    </>
  );
};

export default Navbar;
