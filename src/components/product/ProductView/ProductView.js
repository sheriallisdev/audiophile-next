import { useRouter } from "next/router";
import Image from "next/image";

import { Button, Container, Quantity, StyledLink } from "@components/ui";

import styles from "./ProductView.module.scss";

const ProductView = ({ product }) => {
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
        <p className={styles.backLink} onClick={() => router.back()}>
          Go Back
        </p>
        <div className={styles.productInfoContainer}>
          <div className={styles.mainImageContainer}>
            <Image src={mainImage.url} width={1080} height={1120} alt="" />
          </div>
          <div>
            {isNew && <span className={styles.newProduct}>New Product</span>}
            <h1 className={styles.productName}>{name}</h1>
            <p className={styles.productDescription}>{description}</p>
            <p className={styles.productPrice}>{`$ ${price}`}</p>
            <div className={styles.addToCart}>
              <Quantity placeholder={1} />
              <Button>Add to Cart</Button>
            </div>
          </div>
        </div>

        <div className={styles.feauturesContainer}>
          <h3 className={styles.featuresTitle}>Features</h3>
          <p>{features}</p>
        </div>
        <div className={styles.inTheBox}>
          <h3>In the Box</h3>
          <ul className={styles.includesList}>
            {productIncludes.map(({ id, quantity, itemName }) => (
              <li key={id} className={styles.includesItem}>
                <span
                  className={styles.includesQuantity}
                >{`${quantity}x`}</span>{" "}
                {itemName}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.imageGalleryContainer}>
          {imageGallery.map((image, index) => (
            <div key={index} className={styles.galleryImageContainer}>
              <Image
                key={index}
                src={image.url}
                layout="fill"
                objectFit="cover"
                alt=""
                className={styles.galleryImage}
              />
            </div>
          ))}
        </div>
        <h3>You may also like</h3>
        <div className={styles.otherProducts}>
          {otherProducts.map((product) => (
            <div key={product.slug} className={styles.otherProductsCard}>
              <Image
                src={product.mainImage.url}
                height={310}
                width={350}
                alt=""
              />
              <h5>{product.name}</h5>
              <StyledLink href={product.slug}>See Product</StyledLink>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ProductView;
