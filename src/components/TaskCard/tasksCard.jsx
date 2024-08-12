import { deleteTaskRequest } from "../../api/tasks.axios";
import { useTasks } from "../../context/taskContext";

function TaskCard({ task }) {

  const { deleteTask  } = useTasks();

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <spam> {task.done === 1 ? "✅" : "⌛"} </spam>
      <spam> {task.createAt} </spam>
      <button>Editar</button>
      <button onClick={() => deleteTask(task.id)}>Borrar</button>
    </div>
  );
}
export default TaskCard;
