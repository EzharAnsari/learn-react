function TodoItem2() {
  let todo_name = "Go to college";
  let todo_date = "12/01/2025";

  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{todo_name}</div>
        <div class="col-4">{todo_date}</div>
        <div class="col-2">
          <button class="btn btn-danger kg-button">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;