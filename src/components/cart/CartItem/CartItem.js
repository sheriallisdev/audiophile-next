import { Quantity } from "@components/ui";
import styles from "./CartItem.module.scss";

export const CartItem = ({ price, quantity, image, name }) => {
  return (
    <li className={styles.cartItem}>
      <img className={styles.image} src={image} alt="" />
      <div className={styles.productInfo}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>$ {price}</p>
      </div>
      <Quantity placeholder={quantity} className={styles.quantityInput} />
    </li>
  );
};
