import Image from "next/legacy/image";
import styles from "./ProductGallery.module.scss";

const ProductGallery = ({ imageGallery }) => {
  return (
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
  );
};

export default ProductGallery;
