import TodoItem from "./TodoItem";

const TodoItems = ({ items }) => {
  items.map((ele) => console.log(ele));
  return (
    <div className="items-container">
      {items.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
      <TodoItem todoName={"hello"} todoDate={"today"}></TodoItem>
    </div>
  );
};

export default TodoItems;
