import Link from "next/link";

import styles from "./StyledLink.module.scss";

const StyledLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className={styles.primary}>{children}</a>
    </Link>
  );
};

export default StyledLink;
