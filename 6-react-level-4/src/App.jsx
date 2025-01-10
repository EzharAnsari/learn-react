import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  let initItems = [
    {
      name: "Buy Milk",
      dueDate: "10/01/2025",
    },
    {
      name: "Go to College",
      dueDate: "12/01/2025",
    },
    {
      name: "react learn",
      dueDate: "05/01/2025",
    },
  ];

  const [todoItems, setTodoItems] = useState(initItems);

  const handleAddButtonClick = (newTodoItem) => {
    setTodoItems((currItems) => [...currItems, newTodoItem]);
  };

  const handleDeleteBtn = (name, date) => {
    console.log(name, date);
    const result = todoItems.filter((ele) => {
      return ele.name !== name && ele.dueDate !== date;
    });

    setTodoItems(result);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo handleAddButtonClick={handleAddButtonClick}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems
        items={todoItems}
        handleDeleteBtn={handleDeleteBtn}
      ></TodoItems>
    </center>
  );
}

export default App;
