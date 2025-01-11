import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
  const { items } = useContext(TodoItemsContext);

  return (
    <div className="items-container">
      {items.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
