import { useContext, useRef } from "react";
import { IoAddSharp } from "react-icons/io5";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const inputNameElement = useRef("");
  const inputDateElement = useRef("");

  const handleAddButton = (event) => {
    console.log("clicked");
    event.preventDefault();
    const todoItem = {
      name: inputNameElement.current.value,
      dueDate: inputDateElement.current.value,
    };
    addNewItem(todoItem);
    inputNameElement.current.value = "";
    inputDateElement.current.value = "";
  };

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={(e) => handleAddButton(e)}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            ref={inputNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={inputDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <IoAddSharp />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
