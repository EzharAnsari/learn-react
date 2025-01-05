import { useState } from "react";
import style from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");

  const handleButtonClicked = (buttonValue) => {
    if (buttonValue === "C") {
      setCalVal("");
    } else if (buttonValue === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newCalValue = calVal + buttonValue;
      setCalVal(newCalValue);
    }
  };

  return (
    <div className={style.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer
        onButtonClicked={handleButtonClicked}
      ></ButtonsContainer>
    </div>
  );
}

export default App;
