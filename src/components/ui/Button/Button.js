import styles from "./Button.module.scss";

const Button = ({ children, ...props }) => {
  return (
    <button className={styles.primary} {...props}>
      {children}
    </button>
  );
};

export default Button;
