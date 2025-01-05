import style from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClicked }) => {
  const buttonsNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={style.calculatorButtons}>
      {buttonsNames.map((ele) => (
        <button
          key={ele}
          className={style.button}
          onClick={() => onButtonClicked(ele)}
        >
          {ele}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
