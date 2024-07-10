import "./App.css";

function App() {
  return (
    <div class="container">
      <h1 className="gradient-heading">To-Do List</h1>

      <form className="form-add-task">
        <input type="text" placeholder="Add a task" />
        <button className="btn btn-add" type="submit">
          Add
        </button>
      </form>

      <div className="todo-list">
        <div className="todo-list-item">
          <input type="checkbox" id="task1" />
          <label for="task1">Task 1</label>
          <button className="btn btn-delete">Delete</button>
        </div>

        <div className="todo-list-item">
          <input type="checkbox" id="task2" />
          <label for="task2">Task 2</label>
          <button className="btn btn-delete">Delete</button>
        </div>

        <div className="todo-list-item">
          <input type="checkbox" id="task3" />
          <label for="task3">Task 3</label>
          <button className="btn btn-delete">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
