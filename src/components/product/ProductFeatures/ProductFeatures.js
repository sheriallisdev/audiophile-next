import styles from "./ProductFeatures.module.scss";

const ProductFeatures = ({ features, productIncludes }) => {
  return (
    <div className={styles.feauturesContainer}>
      <div className={styles.feauturesWrapper}>
        <h3 className={styles.featuresTitle}>Features</h3>
        <p>{features}</p>
      </div>
      <div className={styles.inTheBox}>
        <h3 className={styles.inTheBoxTitle}>In the Box</h3>
        <ul className={styles.includesList}>
          {productIncludes.map(({ id, quantity, itemName }) => (
            <li key={id} className={styles.includesItem}>
              <span className={styles.includesQuantity}>{`${quantity}x`}</span>{" "}
              {itemName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductFeatures;
