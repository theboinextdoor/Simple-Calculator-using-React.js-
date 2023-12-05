import styles from "../css/Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      type="text"
      className={styles.display}
      placeholder="00000000000000"
      value={displayValue}
      readOnly
    />
  );
};
export default Display;
