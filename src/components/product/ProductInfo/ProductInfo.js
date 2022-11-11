import Image from "next/image";
import { Button, Quantity } from "@components/ui";
import { CartContext } from "@context/CartContext";
import { useContext, useState } from "react";

import styles from "./ProductInfo.module.scss";

const ProductInfo = ({ product }) => {
  const cart = useContext(CartContext);

  const [quantityToAdd, setQuantityToAdd] = useState(1);

  const handleIncrement = () => {
    setQuantityToAdd((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantityToAdd > 1) {
      setQuantityToAdd((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cart.updateCartQuantity(product, quantityToAdd);
    setQuantityToAdd(1);
  };

  return (
    <div className={styles.productInfoContainer}>
      <div className={styles.mainImageContainer}>
        <Image src={product.mainImage.url} width={1080} height={1120} alt="" />
      </div>
      <div className={styles.productContentContainer}>
        {product.isNew && (
          <span className={styles.newProduct}>New Product</span>
        )}
        <h1 className={styles.productName}>{product.name}</h1>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>{`$ ${product.price}`}</p>
        <div className={styles.addToCart}>
          <Quantity
            placeholder={quantityToAdd}
            onIcrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <Button onClick={handleSubmit}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
