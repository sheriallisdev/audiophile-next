import Checkmark from "@components/icons/Checkmark";
import styles from "./OrderConfirmation.module.scss";

import { useContext } from "react";
import { CartContext } from "@context/CartContext";

import { formatCurrency } from "@utils/formatCurrency";
import { Button } from "@components/ui";

import { useRouter } from "next/router";

const OrderConfirmation = () => {
  const router = useRouter();
  const cart = useContext(CartContext);

  return (
    <div className={styles.container}>
      <Checkmark />
      <h2 className={styles.title}>
        Thank you <br />
        for your order
      </h2>
      <p className={styles.infotext}>
        You will receive an email confirmation shortly.
      </p>

      <div className={styles.orderDetails}>
        <div className={styles.productInfoContainer}>
          <div className={styles.summaryItemContainer}>
            <img className={styles.image} src={cart.items[0]?.mainImage.url} />
            <div className={styles.description}>
              <span className={styles.name}>{cart.items[0]?.name}</span>
              <span className={styles.price}>
                {formatCurrency(cart.items[0]?.price)}
              </span>
            </div>
            <div className={styles.quantity}> x{cart.items[0]?.quantity}</div>
          </div>
          <span className={styles.additionalItems}>
            And {cart.items.length - 1} other item(s)
          </span>
        </div>
        <div className={styles.priceInfoContainer}>
          <span className={styles.priceLabel}>Grand Total</span>
          <span className={styles.priceAmount}>
            {formatCurrency(cart.getGrandTotal())}
          </span>
        </div>
      </div>
      <Button variant="fullWidth" onClick={() => router.push("/")}>
        Back to home
      </Button>
    </div>
  );
};

export default OrderConfirmation;
