import { useState } from "react";
import { IoAddSharp } from "react-icons/io5";

function AddTodo({ handleAddButtonClick }) {
  const [inputName, setInputName] = useState("");
  const [inputDate, setInputDate] = useState("");

  const handleInputName = (event) => {
    setInputName(event.target.value);
  };

  const handleInputDate = (event) => {
    setInputDate(event.target.value);
  };

  const handleAddButton = (event) => {
    console.log("clicked");
    event.preventDefault();
    const todoItem = {
      name: inputName,
      dueDate: inputDate,
    };
    handleAddButtonClick(todoItem);
    setInputDate("");
    setInputName("");
  };

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={(e) => handleAddButton(e)}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={inputName}
            onChange={handleInputName}
          />
        </div>
        <div className="col-4">
          <input type="date" value={inputDate} onChange={handleInputDate} />
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
