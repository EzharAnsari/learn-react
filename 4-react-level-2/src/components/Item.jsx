import style from "./Item.module.css";

const Item = (props) => {
  let food = props.foodItem;

  return (
    <>
      <li className={`list-group-item ${style["kg-item"]}`}>
        <span className={`${style["kg-span"]}`}>{food}</span>
        <button
          onClick={props.handleOnClick}
          className={`${style.button} btn btn-info`}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
