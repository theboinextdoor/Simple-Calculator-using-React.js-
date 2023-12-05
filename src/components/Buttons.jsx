import styles from "../css/Buttons.module.css";

const Buttons = ({ onButtonClick }) => {
  const btn = [
    "1",
    "2",
    "3",
    "C",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "00",
    "0",
    ".",
    "/",
    "+",
    "=",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {btn.map((buttonName) => (
        <button
          className={styles.buttons}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
