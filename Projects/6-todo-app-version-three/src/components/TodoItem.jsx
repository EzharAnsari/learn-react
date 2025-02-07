import { MdDeleteOutline } from "react-icons/md";

function TodoItem({ todoName, todoDate, handleDeleteBtn }) {
  const handleClicke = () => {
    handleDeleteBtn(todoName, todoDate);
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger kg-button" onClick={handleClicke}>
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
