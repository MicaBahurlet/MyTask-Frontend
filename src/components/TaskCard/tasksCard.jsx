
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
        <Button onClick={() => handleDone(task.done)}> ✅</Button>
      </ButtonGroup>
    </Card>
  );
}

export default TaskCard;
