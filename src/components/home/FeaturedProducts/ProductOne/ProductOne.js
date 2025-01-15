import Image from "next/legacy/image";
import { Card, StyledLink } from "@components/ui";
import styles from "./ProductOne.module.scss";

const ProductOne = () => {
  return (
    <Card className={styles.productCard}>
      <div className={styles["col-1"]}>
        <div className={styles.imageContainer}>
          <Image
            src={`/assets/home/desktop/image-speaker-zx9.png`}
            width={756}
            height={918}
            alt=""
          />
        </div>
      </div>
      <div className={styles["col-2"]}>
        <h2 className={styles.title}>ZX9 SPEAKER</h2>
        <p className={styles.description}>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <StyledLink
          href={`/product/xx99-mark-ii-headphones`}
          className="secondary"
        >
          See Product
        </StyledLink>
      </div>
    </Card>
  );
};

export default ProductOne;
