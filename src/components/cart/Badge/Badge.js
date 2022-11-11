import styles from "./Badge.module.scss";

export const Badge = ({ cartItemCount }) => {
  return <span className={styles.badge}>{cartItemCount}</span>;
};
