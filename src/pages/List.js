import { Task } from "../components/Task";

export default function List({ tasks }) {

  return (
    <div className="list">
        <div className="App d-flex flex-column gap-2 w-75 mx-auto">
          {tasks.map((task) => (
            <Task
              key={task.id}
              title={task.title}
              content={task.content}
              like={task.like}
            />
          ))}
        </div>
    </div>
  );
}
