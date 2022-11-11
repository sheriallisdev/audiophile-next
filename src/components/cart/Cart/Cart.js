import styles from "./Cart.module.scss";
import { Backdrop, Button, Card, Container } from "@components/ui";
import { CartItem } from "../CartItem/CartItem";
import { useRouter } from "next/router";
import { useContext } from "react";
import { CartContext } from "@context/CartContext";

import { formatCurrency } from "@utils/formatCurrency";

const Cart = ({ handleCartClose }) => {
  const cart = useContext(CartContext);

  const CART_DATA = cart.items;
  const cartIsEmpty = CART_DATA.length === 0;

  const router = useRouter();

  const totalCost = cart.getTotalCost();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCartClose();
    router.push("/checkout");
  };

  const handleRemoveAllItems = (e) => {
    e.preventDefault();
    cart.removeAllFromCart();
    console.log("remove all items from cart");
  };

  return (
    <Backdrop>
      <Container className={styles.cartContainer}>
        <Card className={styles.cartCard}>
          <header className={styles.cartHeader}>
            <p className={styles.cartQuantity}>CART ({CART_DATA.length}) </p>
            <button
              className={styles.removeButton}
              onClick={handleRemoveAllItems}
            >
              Remove all
            </button>
          </header>
          <form className={styles.form} onSubmit={handleSubmit}>
            {!cartIsEmpty && (
              <ul className={styles.productList}>
                {CART_DATA.map((product) => (
                  <CartItem product={product} key={product.id} />
                ))}
              </ul>
            )}
            {!cartIsEmpty && (
              <div className={styles.totalContainer}>
                <p className={styles.total}>Total</p>
                <p className={styles.totalPrice}>{formatCurrency(totalCost)}</p>
              </div>
            )}
            <Button disabled={cartIsEmpty} variant="fullWidth" type="submit">
              Checkout
            </Button>
          </form>
        </Card>
      </Container>
    </Backdrop>
  );
};

export default Cart;
