import React from "react";
import { StatusIndicatorWrapper, StatusPin, StatusText } from "./TasksStatusStiles.js";

function TaskStatusIndicator() {
  const statuses = [
    { color: "#4CAF50", text: "Hoy" },
    { color: "#FF9800", text: "De ayer" },
    { color: "#F44336", text: "Atrasada + de 2 días" },
  ];

  return (
    <StatusIndicatorWrapper>
      {statuses.map((status, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <StatusPin color={status.color} />
          <StatusText>{status.text}</StatusText>
        </div>
      ))}
    </StatusIndicatorWrapper>
  );
}

export default TaskStatusIndicator;
