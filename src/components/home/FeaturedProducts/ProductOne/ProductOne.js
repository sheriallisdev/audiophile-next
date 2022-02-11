import Image from "next/image";
import { Card, StyledLink } from "@components/ui";
import styles from "./ProductOne.module.scss";

const ProductOne = () => {
  return (
    <Card className={styles.productCard}>
      <div className="col-1">
        <div className={styles.imageContainer}>
          <Image
            src={`/assets/home/desktop/image-speaker-zx9.png`}
            width={756}
            height={918}
            alt=""
          />
        </div>
        <h2 className={styles.title}>ZX9 SPEAKER</h2>
      </div>
      <div className="col-2">
        <p className={styles.description}>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <StyledLink
          href={`/product/xx99-mark-ii-headphones`}
          className={styles.styledLink}
        >
          See Product
        </StyledLink>
      </div>
    </Card>
  );
};

export default ProductOne;
