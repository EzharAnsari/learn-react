import style from "./Item.module.css";

const Item = ({ foodItem, bought, handleOnClick }) => {
  return (
    <>
      <li
        className={`list-group-item ${style["kg-item"]} ${bought && "active"}`}
      >
        <span className={`${style["kg-span"]}`}>{foodItem}</span>
        <button
          onClick={handleOnClick}
          className={`${style.button} btn btn-info`}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
