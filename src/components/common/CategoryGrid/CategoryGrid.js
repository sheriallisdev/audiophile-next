import Image from "next/legacy/image";
import Link from "next/link";

import { Container } from "@components/ui";

import styles from "./CategoryGrid.module.scss";
import { ArrowRight } from "@components/icons";

const CategoryGrid = ({ categories, ...props }) => {
  return (
    <Container {...props}>
      <div className={styles.categoriesContainer}>
        {categories.map((category) => (
          <div className={styles.categoryCard} key={category.name}>
            <div className={styles.cardContent}>
              <div className={styles.imageContainer}>
                <Image src={category.image.url} alt="" layout={"fill"} />
              </div>
              <span className={styles.categoryTitle}>{category.name}</span>
              <Link
                href={`/category/${category.slug}`}
                className={styles.categoryLink}
              >
                Shop <ArrowRight className={styles.icon} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CategoryGrid;
