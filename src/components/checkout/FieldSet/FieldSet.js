import styles from "./FieldSet.module.scss";

const FieldSet = ({ children, legend }) => {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{legend}</legend>
      {children}
    </fieldset>
  );
};

export default FieldSet;
