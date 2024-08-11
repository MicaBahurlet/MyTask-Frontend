import { deleteTaskRequest } from "../../api/tasks.axios";

function TaskCard({ task }) {
  const handleDelete = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <spam> {task.done === 1 ? "✅" : "⌛"} </spam>
      <spam> {task.createAt} </spam>
      <button>Editar</button>
      <button onClick={() => handleDelete(task.id)}>Borrar</button>
    </div>
  );
}
export default TaskCard;
