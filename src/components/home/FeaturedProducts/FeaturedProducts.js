import styles from "./FeaturedProducts.module.scss";
import { Container } from "@components/ui";
import ProductOne from "./ProductOne";
import ProductTwo from "./ProductTwo";
import ProductThree from "./ProductThree";

const FeaturedProducts = () => {
  return (
    <section className={styles.sectionWrapper}>
      <Container className={styles.container}>
        <ProductOne />
        <ProductTwo />
        <ProductThree />
      </Container>
    </section>
  );
};

export default FeaturedProducts;
