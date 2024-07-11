import AddButton from "./AddButton";

function AddTaskForm() {
  return (
    <form className="form-add-task">
      <input type="text" placeholder="Add a task" />
      <AddButton />
    </form>
  );
}

export default AddTaskForm;
