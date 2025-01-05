import Item from "./Item";

function FoodItems({ items }) {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${food} being bought`);
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
          handleOnClick={() => console.log(`${food} being bought`)}
        ></Item>
      ))}
    </ul>
  );
}

export default FoodItems;
