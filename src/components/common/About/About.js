import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import { Container } from "@components/ui";
import styles from "./About.module.scss";

const About = ({ info }) => {
  const { tagLine, image, description } = info;

  return (
    <Container className={styles.aboutContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={image.url}
          alt=""
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className={styles.contentCol}>
        <RichText
          content={tagLine.raw.children}
          renderers={{
            h2: ({ children }) => (
              <h3 className={styles.tagLine}>{children}</h3>
            ),
            bold: ({ children }) => <strong>{children}</strong>,
          }}
        />
        <p className={styles.description}>{description}</p>
      </div>
    </Container>
  );
};

export default About;
