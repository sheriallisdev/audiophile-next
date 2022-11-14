import { useContext } from "react";
import { CartContext } from "@context/CartContext";

import { formatCurrency } from "@utils/formatCurrency";

import styles from "./CartSummary.module.scss";

const CartSummary = () => {
  const cart = useContext(CartContext);

  const total = cart.getTotalCost();

  const SHIPPING = 50;

  const VAT = total * 0.2;

  const GRAND_TOTAL = total + SHIPPING;

  return (
    <>
      <h2 className={styles.title}>Summary</h2>
      <ul className={styles.list}>
        {cart.items.map((item) => (
          <div key={item.id} className={styles.summaryItemContainer}>
            <img className={styles.image} src={item.mainImage.url} />
            <div className={styles.description}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.price}>{formatCurrency(item.price)}</span>
            </div>
            <div className={styles.quantity}> x{item.quantity}</div>
          </div>
        ))}
      </ul>
      <div className={styles.pricingRow}>
        <span className={styles.pricingRowLabel}>Total</span>
        <span className={styles.pricingRowAmount}>{formatCurrency(total)}</span>
      </div>
      <div className={styles.pricingRow}>
        <span className={styles.pricingRowLabel}>Shipping</span>
        <span className={styles.pricingRowAmount}>
          {formatCurrency(SHIPPING)}
        </span>
      </div>
      <div className={styles.pricingRow}>
        <span className={styles.pricingRowLabel}>VAT (Included)</span>
        <span className={styles.pricingRowAmount}>{formatCurrency(VAT)}</span>
      </div>
      <div className={styles.pricingRow}>
        <span className={styles.pricingRowLabel}>Grand Total</span>
        <span className={styles.grandTotal}>{formatCurrency(GRAND_TOTAL)}</span>
      </div>
    </>
  );
};

export default CartSummary;
