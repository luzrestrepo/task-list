import DeleteAllTaskButton from "./DeleteAllTaskButton";
import Task from "./Task";

export default function TaskList({ tasks, onDeleteAll }) {
  return (
    <div>
      <DeleteAllTaskButton onClick={onDeleteAll} />
      {tasks.map((task, id) => (
        <Task key={id} task={task} />
      ))}
    </div>
  );
}
