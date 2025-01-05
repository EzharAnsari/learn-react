import { useState } from "react";
import Item from "./Item";

function FoodItems({ items }) {
  let [activeFoodItems, setActiveFoodItems] = useState([]);

  const handleBuyButtonClicked = (food, event) => {
    let newActiveFoodItems = [...activeFoodItems, food];
    setActiveFoodItems(newActiveFoodItems);
  };

  return (
    <ul className="list-group">
      {items.map((food) => (
        // <li key={food} className="list-group-item">
        //   {food}
        // </li>
        <Item
          key={food}
          foodItem={food}
          bought={activeFoodItems.includes(food)}
          handleOnClick={(event) => handleBuyButtonClicked(food, event)}
        ></Item>
      ))}
    </ul>
  );
}

export default FoodItems;
