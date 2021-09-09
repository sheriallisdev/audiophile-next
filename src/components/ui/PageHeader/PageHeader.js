import styles from "./PageHeader.module.scss";

import { Container } from "@components/ui";

const PageHeader = ({ pageTitle }) => {
  return (
    <header className={styles.pageHeader}>
      <Container>
        <h2 className={styles.pageTitle}>{pageTitle}</h2>
      </Container>
    </header>
  );
};

export default PageHeader;
