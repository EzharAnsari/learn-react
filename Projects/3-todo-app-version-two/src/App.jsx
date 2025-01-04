import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

function App() {
  let todoItems = [
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

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems items={todoItems}></TodoItems>
    </center>
  );
}

export default App;
