import { useReducer, createContext } from "react";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [...currTodoItems, action.payload.newTodoItem];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.name
    );
  }

  return newTodoItems;
};

export const TodoItemsContext = createContext({
  items: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (newTodoItem) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        newTodoItem,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (name) => {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        name,
      },
    };

    dispatchTodoItems(newItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        items: todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
