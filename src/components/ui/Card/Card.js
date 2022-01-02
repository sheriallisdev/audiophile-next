import styles from "./Card.module.scss";

const Card = ({ children, className, ...props }) => {
  let cardClassName = styles.card;

  if (className) {
    cardClassName = `${cardClassName} ${className}`;
  }

  return (
    <div className={cardClassName} {...props}>
      {children}
    </div>
  );
};

export default Card;
