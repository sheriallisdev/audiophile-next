import Link from "next/link";

import styles from "./StyledLink.module.scss";

const StyledLink = ({ children, className, href, ...props }) => {
  const classes = `${styles.link} ${styles[className]}`;

  return (
    <Link href={href}>
      <a className={classes} {...props}>
        {children}
      </a>
    </Link>
  );
};

export default StyledLink;
