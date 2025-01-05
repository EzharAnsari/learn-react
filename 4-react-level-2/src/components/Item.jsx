import style from "./Item.module.css";

const Item = (props) => {
  let food = props.foodItem;

  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${food} being bought`);
  };

  return (
    <>
      <li className={`list-group-item ${style["kg-item"]}`}>
        <span className={`${style["kg-span"]}`}>{food}</span>
        <button
          onClick={(event) => handleBuyButtonClicked(event)}
          className={`${style.button} btn btn-info`}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
