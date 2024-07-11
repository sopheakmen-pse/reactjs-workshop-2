import DeleteButton from "./DeleteButton";

function TaskListItem(props) {
  return (
    <div className="todo-list-item">
      <input type="checkbox" id="task1" checked={false} />
      <label for="task1">{"ll"}</label>
      <DeleteButton />
    </div>
  );
}

export default TaskListItem;
