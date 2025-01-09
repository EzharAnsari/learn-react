import { useState } from "react";

function AddTodo({ handleAddButtonClick }) {
  const [inputName, setInputName] = useState("");
  const [inputDate, setInputDate] = useState("");

  const handleInputName = (event) => {
    setInputName(event.target.value);
  };

  const handleInputDate = (event) => {
    setInputDate(event.target.value);
  };

  const handleAddButton = () => {
    console.log("clicked");
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
      <div className="row kg-row">
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
          <button
            className="btn btn-success kg-button"
            onClick={handleAddButton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
