import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

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

  const addNewItem = (newTodoItem) => {
    setTodoItems((currItems) => [...currItems, newTodoItem]);
  };

  const deleteItem = (name, date) => {
    console.log(name, date);
    const result = todoItems.filter((ele) => {
      return ele.name !== name && ele.dueDate !== date;
    });

    setTodoItems(result);
  };

  // const defaultItem = [{ name: "Buy Ghee", dueDate: "today" }];

  return (
    <TodoItemsContext.Provider
      value={{
        items: todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMessage />
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
