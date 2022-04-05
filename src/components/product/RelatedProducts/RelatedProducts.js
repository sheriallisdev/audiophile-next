import Image from "next/image";

import styles from "./RelatedProducts.module.scss";

import { StyledLink } from "@components/ui";

const RelatedProducts = ({ otherProducts }) => {
  return (
    <>
      <div className={styles.otherProducts}>
        <h3 className={styles.title}>You may also like</h3>
        <div className={styles.cardsContainer}>
          {otherProducts.map((product) => (
            <div key={product.slug} className={styles.otherProductsCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={product.mainImage.url}
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <h4 className={styles.productName}>{product.name}</h4>
              <StyledLink href={product.slug} className="primary">
                See Product
              </StyledLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
