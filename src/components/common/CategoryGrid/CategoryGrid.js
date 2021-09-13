import Image from "next/image";
import Link from "next/link";

import { Container } from "@components/ui";

import styles from "./CategoryGrid.module.scss";
import { ArrowRight } from "@components/icons";

const CategoryGrid = ({ categories }) => {
  return (
    <Container>
      <div className={styles.categoriesContainer}>
        {categories.map((category) => (
          <div className={styles.categoryCard} key={category.name}>
            <div className={styles.cardContent}>
              <div className={styles.imageContainer}>
                <Image src={category.image.url} alt="" layout={"fill"} />
              </div>
              <span className={styles.categoryTitle}>{category.name}</span>
              <Link href={`/category/${category.slug}`}>
                <a className={styles.categoryLink}>
                  Shop <ArrowRight className={styles.icon} />
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CategoryGrid;
