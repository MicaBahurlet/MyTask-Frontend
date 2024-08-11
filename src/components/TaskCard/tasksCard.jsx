function TaskCard({ task }) {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <spam> {task.done === 1 ? "✅" : "⌛"} </spam>
      <spam> {task.createAt} </spam>
      <button>Editar</button>
      <button>Borrar</button>
    </div>
  );
}
export default TaskCard;
