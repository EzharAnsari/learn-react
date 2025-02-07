import { useState } from "react";
import Container from "./Container";
import FoodInput from "./FoodInput";
import FoodItems from "./FoodItems";

function UserGreeting() {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function Greeting() {
  const isLoggedIn = true;
  // conditional Rendering using if-else block
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function ConditionalRendering() {
  let items = [
    "Fish",
    "Broccoli",
    "cruciferous vegetables",
    "Beets",
    "Spinach",
    "leafy green vegetables",
    "Kale",
    "Peanut butter",
  ];

  let [foodItems, setFoodItems] = useState(items);
  // let foods = [];

  // if (foods.length === 0) {
  //   return <h3>I am still hungry</h3>;
  // }

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newFoodItems = [...foodItems, newFoodItem];
      setFoodItems(newFoodItems);
    }
  };

  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default ConditionalRendering;
