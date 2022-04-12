import styles from "./Backdrop.module.scss";

const Backdrop = ({ children }) => {
  return <div className={styles.backdrop}>{children}</div>;
};

export default Backdrop;
