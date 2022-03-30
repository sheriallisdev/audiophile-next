import { Card, StyledLink } from "@components/ui";
import styles from "./ProductTwo.module.scss";

const ProductTwo = () => {
  return (
    <Card className={styles.productCard}>
      <div className={styles.content}>
        <h2 className={styles.title}>ZX7 Speaker</h2>
        <StyledLink href={`/product/zx7-speaker`} className="outline">
          See Product
        </StyledLink>
      </div>
    </Card>
  );
};

export default ProductTwo;
