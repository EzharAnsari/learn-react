import Container from "./Container";
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
      <Container>
        <h1>Healthy Foods</h1>
        <FoodItems items={foods}></FoodItems>
      </Container>
      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being
        </p>
      </Container>
    </>
  );
}

export default ConditionalRendering;
