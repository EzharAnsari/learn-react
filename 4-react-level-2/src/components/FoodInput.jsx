import style from "./FoodInput.module.css";

const FoodInput = ({ handleOnChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Food Item here"
        className={style.foodInput}
        onChange={handleOnChange}
      />
    </>
  );
};

export default FoodInput;
