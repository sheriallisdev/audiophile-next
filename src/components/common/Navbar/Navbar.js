import styles from "./Navbar.module.scss";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { CartContext } from "@context/CartContext";

import { Logo, Container } from "@components/ui";
import { ShoppingCart, Hamburger } from "@components/icons";
import NavLinks from "./NavLinks";
import { MobileMenu } from "@components/common";
import { Cart } from "@components/cart";
import { Badge } from "@components/cart/Badge/Badge";

const Navbar = () => {
  const router = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const cart = useContext(CartContext);

  const handleMenuOpen = () => {
    setMenuIsOpen(!menuIsOpen);
    if (cart.cartIsOpen) cart.toggleCartOpenState();
  };

  const handleCartOpen = () => {
    cart.toggleCartOpenState();
    if (menuIsOpen) setMenuIsOpen(!menuIsOpen);
  };

  const handleCartClose = () => {
    cart.toggleCartOpenState();
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
              {cart.items.length > 0 && (
                <Badge cartItemCount={cart.items.length} />
              )}
            </button>
          </div>
        </Container>
      </div>
      {menuIsOpen && <MobileMenu />}
      {cart.cartIsOpen && <Cart handleCartClose={handleCartClose} />}
    </>
  );
};

export default Navbar;
