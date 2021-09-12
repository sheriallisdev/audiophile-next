import Link from "next/link";

import styles from "./Button.module.scss";

const Button = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className={styles.primary}>{children}</a>
    </Link>
  );
};

export default Button;
