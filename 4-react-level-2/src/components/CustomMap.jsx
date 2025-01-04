function CustomMap() {
  let foods = [
    "Fish",
    "Broccoli",
    "cruciferous vegetables",
    "Beets",
    "Spinach",
    "leafy green vegetables",
    "Kale",
    "Peanut butter",
  ];

  return (
    <>
      <h1>Health Foods</h1>
      <ul className="list-group">
        {foods.map((food) => (
          <li key={food} className="list-group-item">
            {food}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CustomMap;
