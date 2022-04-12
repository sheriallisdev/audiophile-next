import styles from "./Cart.module.scss";
import { Backdrop, Button, Card, Container } from "@components/ui";
import { CartItem } from "../CartItem/CartItem";
import { useRouter } from "next/router";

const CART_DATA = [
  {
    id: 1,
    name: "XX99 MK II",
    quantity: 1,
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FdLrcxMEATeWlcEA7oiA0&w=3840&q=75",
    price: 2999,
  },
  {
    id: 2,
    name: "XX59",
    quantity: 2,
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FB2buSYrJQdaVm8gk469i&w=3840&q=75",
    price: 899,
  },
  {
    id: 3,
    name: "YX1",
    quantity: 1,
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FGtAwShdHTaStlw4XKYzy&w=1080&q=75",
    price: 599,
  },
];

const Cart = ({ handleCartClose }) => {
  const cartIsEmpty = CART_DATA.length === 0;

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCartClose();
    router.push("/checkout");
  };

  const handleRemoveAllItems = (e) => {
    e.preventDefault();
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
                  <CartItem
                    image={product.image}
                    quantity={product.quantity}
                    name={product.name}
                    price={product.price}
                    key={product.id}
                  />
                ))}
              </ul>
            )}
            {!cartIsEmpty && (
              <div className={styles.totalContainer}>
                <p className={styles.total}>Total</p>
                <p className={styles.totalPrice}>$ 5,396</p>
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
