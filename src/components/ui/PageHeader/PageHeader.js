import styles from "./PageHeader.module.scss";

import { Container } from "@components/ui";

const PageHeader = ({ pageTitle }) => {
  return (
    <header className={styles.pageHeader}>
      <Container>
        <h1 className={styles.pageTitle}>{pageTitle}</h1>
      </Container>
    </header>
  );
};

export default PageHeader;
