import CategoryGrid from "../CategoryGrid";
import styles from "./MobileMenu.module.scss";
import { menuData } from "@data/menuData.js";

const MobileMenu = () => {
  return (
    <>
      <CategoryGrid categories={menuData} className={styles.container} />
    </>
  );
};

export default MobileMenu;
