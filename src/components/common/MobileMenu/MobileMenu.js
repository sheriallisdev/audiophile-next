import CategoryGrid from "../CategoryGrid";
import styles from "./MobileMenu.module.scss";
import { menuData } from "@data/menuData.js";
import { Backdrop } from "@components/ui";

const MobileMenu = () => {
  return (
    <>
      <Backdrop />
      <CategoryGrid categories={menuData} className={styles.container} />;
    </>
  );
};

export default MobileMenu;
