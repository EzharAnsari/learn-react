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
  // let foods = [];

  // if (foods.length === 0) {
  //   return <h3>I am still hungry</h3>;
  // }

  return (
    <>
      <h1>Health Foods</h1>
      {/* {foods.length === 0 ? <h3>I am still hungry</h3> : null}  // ternary operators */}
      {/* {foods.length == 0 && <h3>I am still hungry</h3>}  // logical operators */}
      <FoodItems items={foods}></FoodItems>
    </>
  );
}

export default ConditionalRendering;
