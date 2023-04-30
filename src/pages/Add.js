import TaskForm from "../components/TaskForm";

export default function Add({ tasks, setTasks}) {
  const handleAdd = (task) => {
    const tasksCopy = [...tasks];
    tasksCopy.push(task);
    tasksCopy.reverse();
    setTasks(tasksCopy);
  };

  return (
    <div className="add text-center">
        <h1>Add a element</h1>
        <TaskForm handleAdd={handleAdd} className="position-absolute" />
    </div>
  );
}
