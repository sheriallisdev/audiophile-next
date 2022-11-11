import { useContext } from "react";
import { CartContext } from "@context/CartContext";
import { Quantity } from "@components/ui";
import styles from "./CartItem.module.scss";

import { formatCurrency } from "@utils/formatCurrency";

export const CartItem = ({ product }) => {
  const { price, quantity, mainImage, name } = product;
  const cart = useContext(CartContext);

  const handleIncrement = (e) => {
    e.preventDefault();
    cart.addOneToCart(product);
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    cart.removeOneFromCart(product);
  };

  return (
    <li className={styles.cartItem}>
      <img className={styles.image} src={mainImage.url} alt="" />
      <div className={styles.productInfo}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>{formatCurrency(price)}</p>
      </div>
      <Quantity
        placeholder={quantity}
        onIcrement={handleIncrement}
        onDecrement={handleDecrement}
        className={styles.quantityInput}
      />
    </li>
  );
};
