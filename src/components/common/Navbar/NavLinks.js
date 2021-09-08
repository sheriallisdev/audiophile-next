import styles from "./NavLinks.module.scss";

import Link from "next/link";

const NavLinks = () => (
  <nav className={styles.nav}>
    <ul className={styles.mainNav}>
      <li className={styles.navLink}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className={styles.navLink}>
        <Link href="/">
          <a>Headphones</a>
        </Link>
      </li>
      <li className={styles.navLink}>
        <Link href="/">
          <a>Speakers</a>
        </Link>
      </li>
      <li className={styles.navLink}>
        <Link href="/">
          <a>Earphones</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavLinks;
