import "./App.css";
import Heading from "./components/Heading";
import AddTaskForm from "./components/AddTaskForm";
import TaskListItem from "./components/TaskListItem";

function App() {
  const tasks = [
    { id: 1, taskName: "Task 1", done: false },
    { id: 2, taskName: "Task 2", done: false },
    { id: 3, taskName: "Task 3", done: true },
  ];
  console.log(tasks);

  const components = tasks.map((task) => <TaskListItem task={task} />);
  console.log(components);

  return (
    <div class="container">
      <Heading />
      <AddTaskForm />

      <div className="todo-list">
        <TaskListItem task={tasks[0]} />
        <TaskListItem task={tasks[1]} />
        <TaskListItem task={tasks[2]} />
      </div>
    </div>
  );
}

export default App;
