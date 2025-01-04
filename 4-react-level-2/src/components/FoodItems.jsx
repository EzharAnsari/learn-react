import Item from "./Item";

function FoodItems({ items }) {
  return (
    <ul className="list-group">
      {items.map((food) => (
        // <li key={food} className="list-group-item">
        //   {food}
        // </li>
        <Item key={food} foodItem={food}></Item>
      ))}
    </ul>
  );
}

export default FoodItems;
