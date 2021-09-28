import styles from "./Quantity.module.scss";

const Quantity = ({ placeholder }) => {
  return (
    <div className={styles.quantityContainer}>
      <button className={styles.inputAction}>&minus;</button>
      <input
        className={styles.numberInput}
        type="number"
        placeholder={placeholder}
      />
      <button className={styles.inputAction}>+</button>
    </div>
  );
};

export default Quantity;
