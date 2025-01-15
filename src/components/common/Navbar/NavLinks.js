import styles from "./NavLinks.module.scss";

import Link from "next/link";

const links = [
  {
    name: "Home",
    slug: "/",
  },
  {
    name: "Headphones",
    slug: "/category/headphones",
  },
  {
    name: "Speakers",
    slug: "/category/speakers",
  },
  {
    name: "Earphones",
    slug: "/category/earphones",
  },
];

const NavLinks = ({ className }) => (
  <ul className={className}>
    {links.map((link) => (
      <li className={styles.navLink} key={link.name}>
        <Link href={link.slug}>{link.name}</Link>
      </li>
    ))}
  </ul>
);

export default NavLinks;
