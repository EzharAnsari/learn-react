import TodoItem from "./TodoItem";

const TodoItems = ({ items, handleDeleteBtn }) => {
  items.map((ele) => console.log(ele));
  return (
    <div className="items-container">
      {items.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          handleDeleteBtn={handleDeleteBtn}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
