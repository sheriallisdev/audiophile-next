import { useRouter } from "next/router";
import { Container } from "@components/ui";
import {
  ProductFeatures,
  ProductGallery,
  ProductInfo,
  RelatedProducts,
} from "@components/product";
import { About, CategoryGrid } from "@components/common";

import styles from "./ProductView.module.scss";

const ProductView = ({ product, categories, info }) => {
  const {
    name,
    mainImage,
    isNew,
    price,
    description,
    features,
    productIncludes,
    imageGallery,
    otherProducts,
  } = product;

  const router = useRouter();

  return (
    <>
      <Container className={styles.productViewContainer}>
        <button className={styles.backLink} onClick={() => router.back()}>
          Go Back
        </button>
        <ProductInfo
          name={name}
          mainImage={mainImage}
          isNew={isNew}
          price={price}
          description={description}
        />
        <ProductFeatures
          features={features}
          productIncludes={productIncludes}
        />

        <ProductGallery imageGallery={imageGallery} />
        <RelatedProducts otherProducts={otherProducts} />
        <CategoryGrid categories={categories} className={styles.CategoryGrid} />
        <About info={info} className={styles.about} />
      </Container>
    </>
  );
};

export default ProductView;
