import Image from "next/image";
import { Button, Quantity } from "@components/ui";
import { CartContext } from "@context/CartContext";
import { useContext, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { formatCurrency } from "@utils/formatCurrency";

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
    toast.success(`${product.name} has been added to your cart`);
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
        <p className={styles.productPrice}>{formatCurrency(product.price)}</p>
        <div className={styles.addToCart}>
          <Quantity
            placeholder={quantityToAdd}
            onIcrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <Button onClick={handleSubmit}>Add to Cart</Button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ProductInfo;
