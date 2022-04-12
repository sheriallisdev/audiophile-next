import styles from "./Button.module.scss";

const Button = ({ children, disabled, className, variant, ...props }) => {
  let buttonClassName = styles.primary;

  if (variant === "fullWidth") {
    buttonClassName = `${buttonClassName} ${styles.fullWidth}`;
  }

  if (className) {
    buttonClassName = `${buttonClassName} ${className}`;
  }

  return (
    <button className={buttonClassName} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
