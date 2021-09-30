import Image from "next/image";
import { Button, Quantity } from "@components/ui";

import styles from "./ProductInfo.module.scss";

const ProductInfo = ({ name, description, price, isNew, mainImage }) => {
  return (
    <div className={styles.productInfoContainer}>
      <div className={styles.mainImageContainer}>
        <Image src={mainImage.url} width={1080} height={1120} alt="" />
      </div>
      <div className={styles.productContentContainer}>
        {isNew && <span className={styles.newProduct}>New Product</span>}
        <h1 className={styles.productName}>{name}</h1>
        <p className={styles.productDescription}>{description}</p>
        <p className={styles.productPrice}>{`$ ${price}`}</p>
        <div className={styles.addToCart}>
          <Quantity placeholder={1} />
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
