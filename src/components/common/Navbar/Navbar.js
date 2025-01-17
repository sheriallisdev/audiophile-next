import styles from "./Navbar.module.scss";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { CartContext } from "@context/CartContext";

import { Logo, Container, Backdrop } from "@components/ui";
import { ShoppingCart, Hamburger } from "@components/icons";
import NavLinks from "./NavLinks";
import { MobileMenu } from "@components/common";
import { Cart } from "@components/cart";
import { Badge } from "@components/cart/Badge/Badge";

import { Dialog } from "@headlessui/react";

const Navbar = () => {
  const router = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const cart = useContext(CartContext);

  const handleMenuOpen = () => {
    setMenuIsOpen(!menuIsOpen);
    if (cart.cartIsOpen) cart.closeCart();
  };

  const handleMenuClose = () => {
    setMenuIsOpen(false);
  };

  const handleCartOpen = () => {
    cart.openCart();
    if (menuIsOpen) setMenuIsOpen(!menuIsOpen);
  };

  const handleCartClose = () => {
    cart.closeCart();
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
          <Link href="/" className={styles.logo}>
            <Logo />
          </Link>
          <nav className={styles.nav}>
            <ul className={styles.mainNav}>
              <NavLinks />
            </ul>
          </nav>

          <div className={styles.cartContainer}>
            <button
              className={styles.cartMenu}
              onClick={cart.cartIsOpen ? handleCartClose : handleCartOpen}
            >
              <ShoppingCart />
              {cart.items.length > 0 && (
                <Badge cartItemCount={cart.items.length} />
              )}
            </button>
          </div>
        </Container>
      </div>
      <Dialog
        open={menuIsOpen}
        onClose={handleMenuClose}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "999",
          width: "100%",
        }}
      >
        <Backdrop aria-hidden="true" />
        <Dialog.Panel>
          <MobileMenu />
        </Dialog.Panel>
      </Dialog>

      <Dialog
        open={cart.cartIsOpen}
        onClose={handleCartClose}
        style={{
          position: "absolute",
          top: "98px",
          right: "0",
          width: "100%",
        }}
      >
        <Backdrop aria-hidden="true" />
        <Dialog.Panel>
          <Cart handleCartClose={handleCartClose} />
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Navbar;
