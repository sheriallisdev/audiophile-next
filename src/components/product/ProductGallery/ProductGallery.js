import Image from "next/image";
import styles from "./ProductGallery.module.scss";

const ProductGallery = ({ imageGallery }) => {
  return (
    <div className={styles.imageGalleryContainer}>
      {imageGallery.map((image, index) => (
        <div key={index} className={styles.galleryImageContainer}>
          <Image
            key={index}
            src={image.url}
            alt=""
            className={styles.galleryImage}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductGallery;
