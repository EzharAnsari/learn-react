import { createContext } from "react";

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

export const TodoItemsContext = createContext({
  items: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
