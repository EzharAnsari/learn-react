import style from "./FoodInput.module.css";

const FoodInput = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

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
