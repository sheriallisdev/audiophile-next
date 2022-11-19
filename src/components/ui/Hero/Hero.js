import { Container, StyledLink } from "@components/ui";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <Container className={styles.heroSectionContainer}>
        <div className={styles.content}>
          <span className={styles.newProduct}>New Product</span>
          <h1 className={styles.title}>XX99 Mark II Headphone</h1>
          <p className={styles.description}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <StyledLink
            href="/product/xx99-mark-ii-headphones"
            className="primary"
          >
            See Product
          </StyledLink>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
