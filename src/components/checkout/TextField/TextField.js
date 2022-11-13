import styles from "./TextField.module.scss";

const TextField = ({
  label,
  id,
  placeholder,
  type,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={error ? "text-input error" : "text-input"}
        style={{
          width: "100%",
          padding: "1.125rem 1.5rem",
          borderRadius: "8px",
          border: "1px solid #CFCFCF",
        }}
      />
    </>
  );
};

export default TextField;
