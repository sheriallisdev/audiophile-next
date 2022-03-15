import { Card, StyledLink } from "@components/ui";
import styles from "./ProductThree.module.scss";

const ProductThree = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Card className={styles["image-card"]}>
          <img src="/assets/home/desktop/image-earphones-yx1.jpg" />
        </Card>
        <Card className={styles["content-card"]}>
          <div className={styles.content}>
            <h2 className={styles.title}>YX1 EARPHONES</h2>
            <StyledLink href={`/product/zx-7-speaker`} className="outline">
              See Product
            </StyledLink>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ProductThree;
