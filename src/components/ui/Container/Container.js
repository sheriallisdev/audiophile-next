import styles from "./Container.module.scss";

const Container = ({ children, className, ...props }) => {
  let containerClassName = styles.container;

  if (className) {
    containerClassName = `${containerClassName} ${className}`;
  }

  return (
    <div className={containerClassName} {...props}>
      {children}
    </div>
  );
};

export default Container;
