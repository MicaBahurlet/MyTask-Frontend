import { useTasks } from "../../context/taskContext";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  const navigate = useNavigate();

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <spam> {task.done === 1 ? "✅" : "⌛"} </spam>
      <spam> {task.createAt} </spam>
      <button onClick={() => navigate(`/edit/${task.id}`)}>Editar</button>
      <button onClick={() => deleteTask(task.id)}>Borrar</button>
    </div>
  );
}
export default TaskCard;
