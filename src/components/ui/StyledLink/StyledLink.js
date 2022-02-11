import Link from "next/link";

import styles from "./StyledLink.module.scss";

const StyledLink = ({ children, href, ...props }) => {
  return (
    <Link href={href}>
      <a className={styles.primary} {...props}>
        {children}
      </a>
    </Link>
  );
};

export default StyledLink;
