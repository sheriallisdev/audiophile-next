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
        <Link href="/category/headphones">
          <a>Headphones</a>
        </Link>
      </li>
      <li className={styles.navLink}>
        <Link href="/category/speakers">
          <a>Speakers</a>
        </Link>
      </li>
      <li className={styles.navLink}>
        <Link href="/category/earphones">
          <a>Earphones</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavLinks;
