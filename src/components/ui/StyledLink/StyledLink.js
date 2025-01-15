import Link from "next/link";

import styles from "./StyledLink.module.scss";

const StyledLink = ({ children, className, href, ...props }) => {
  const classes = `${styles.link} ${styles[className]}`;

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
};

export default StyledLink;
