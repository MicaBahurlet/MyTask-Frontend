// import { useTasks } from "../../context/taskContext";
// import { useNavigate } from "react-router-dom";

// function TaskCard({ task }) {
//   const { deleteTask, toggleTaskDone } = useTasks();
//   const navigate = useNavigate();

//   const handleDone = async () => {
//    await toggleTaskDone(task.id);
//   };

//   return (
//     <div>
//       <h3>{task.title}</h3>
//       <p>{task.description}</p>
//       <spam> {task.done === 1 ? "✅" : "⌛"} </spam>
//       <spam> {task.createAt} </spam>
//       <button onClick={() => navigate(`/edit/${task.id}`)}>Editar</button>
//       <button onClick={() => deleteTask(task.id)}>Borrar</button>
//       <button onClick={() => handleDone(task.done) }>Marcar como completado</button>
//     </div>
//   );
// }
// export default TaskCard;


import React from "react";
import { useTasks } from "../../context/taskContext";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Title,
  Description,
  Status,
  Date,
  ButtonGroup,
  Button
} from "./tasksCardStyles.js";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <Card>
      <Title>{task.title}</Title>
      <Description>{task.description}</Description>
      <Status>{task.done === 1 ? "✅" : "⌛"}</Status>
      <Date>{task.createAt}</Date>
      <ButtonGroup>
        <Button onClick={() => navigate(`/edit/${task.id}`)}>Editar</Button>
        <Button onClick={() => deleteTask(task.id)}>Borrar</Button>
        <Button onClick={() => handleDone(task.done)}>✅</Button>
      </ButtonGroup>
    </Card>
  );
}

export default TaskCard;
