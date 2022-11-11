import styles from "./Quantity.module.scss";

const Quantity = ({ placeholder, onDecrement, onIcrement }) => {
  return (
    <div className={styles.quantityContainer}>
      <button className={styles.inputAction} onClick={onDecrement}>
        &minus;
      </button>
      <input
        className={styles.numberInput}
        type="number"
        placeholder={placeholder}
      />
      <button className={styles.inputAction} onClick={onIcrement}>
        +
      </button>
    </div>
  );
};

export default Quantity;
