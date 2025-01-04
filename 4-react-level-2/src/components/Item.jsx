import style from "./Item.module.css";

const Item = (props) => {
  return (
    <>
      <li className={`list-group-item ${style["kg-item"]}`}>
        <span className={`${style["kg-span"]}`}>{props.foodItem}</span>
      </li>
    </>
  );
};

export default Item;
