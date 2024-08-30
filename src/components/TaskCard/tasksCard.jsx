

import React from "react";
import { useTasks } from "../../context/taskContext";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Title,
  Description,
  Status,
  Date as DateStyled,
  ButtonGroup,
  Button
} from "./tasksCardStyles.js";

// Importando íconos de la librería @emotion-icons
import { Edit } from '@emotion-icons/material-outlined/Edit';
import { Delete } from '@emotion-icons/material-outlined/Delete';

import { format } from 'date-fns';
import es from 'date-fns/locale/es';

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const formatDate = (isoString) => {
    return format(new Date(isoString), "dd 'de' MMMM 'de' yyyy", { locale: es });
  };

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <Card>
      <Title>{task.title}</Title>
      <Description>{task.description}</Description>
      <DateStyled>{formatDate(task.createAt)}</DateStyled>
      <Status>{task.done === 1 ? "✅" : "⌛"}</Status>
      <ButtonGroup>
        <Button onClick={() => navigate(`/edit/${task.id}`)}>
          <Edit size={17} color="white" />
        </Button>
        <Button onClick={() => deleteTask(task.id)}>
          <Delete size={17} color="white" />
        </Button>
        <Button onClick={() => handleDone(task.done)}>
          {task.done === 1 ? "Completada" : "Completar"}
        </Button>
      </ButtonGroup>
    </Card>
  );
}

export default TaskCard;


// import React from "react";
// import { useTasks } from "../../context/taskContext";
// import { useNavigate } from "react-router-dom";
// import {
//   Card,
//   Title,
//   Description,
//   Status,
//   Date as DateStyled,
//   ButtonGroup,
//   Button
// } from "./tasksCardStyles.js";

// import { format } from 'date-fns';
// import es from 'date-fns/locale/es';

// function TaskCard({ task }) {
//   const { deleteTask, toggleTaskDone } = useTasks();
//   const navigate = useNavigate();

//   const formatDate = (isoString) => {
//     // date esta llamando al constructor nativo de Js
//     return format(new Date(isoString), "dd 'de' MMMM 'de' yyyy", { locale: es });
//   };

//   const handleDone = async () => {
//     await toggleTaskDone(task.id);
//   };

//   return (
//     <Card>
//       <Title>{task.title}</Title>
//       <Description>{task.description}</Description>
//       <DateStyled>{formatDate(task.createAt)}</DateStyled>
//       <Status>{task.done === 1 ? "✅" : "⌛"}</Status>
//       <ButtonGroup>
//         <Button onClick={() => navigate(`/edit/${task.id}`)}>✍️</Button>
//         <Button onClick={() => deleteTask(task.id)}>🗑️</Button>
//         <Button onClick={() => handleDone(task.done)}>Completa</Button>
//       </ButtonGroup>
//     </Card>
//   );
// }

// export default TaskCard;
