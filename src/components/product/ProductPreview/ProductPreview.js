import { Button } from "@components/ui";
import Image from "next/image";
import styles from "./ProductPreview.module.scss";

const ProductPreview = ({ product }) => {
  const { name, description, mainImage, slug, isNew } = product;

  return (
    <div className={styles.previewContainer}>
      <div className={styles.mediaCol}>
        <Image src={mainImage.url} width={500} height={500} alt="" />
      </div>
      <div className={styles.contentCol}>
        <div className={styles.contentContainer}>
          {isNew && <span className={styles.newProduct}>New Product</span>}
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.description}>{description}</p>
          <Button href={`/products/${slug}`}>See Product</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
