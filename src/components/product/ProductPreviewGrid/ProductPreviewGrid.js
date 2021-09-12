import { Container } from "@components/ui";
import { ProductPreview } from "@components/product";

import styles from "./ProductPreviewGrid.module.scss";

const ProductPreviewGrid = ({ products }) => {
  return (
    <Container className={styles.productGridContainer}>
      {products.map((product) => (
        <ProductPreview product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default ProductPreviewGrid;
