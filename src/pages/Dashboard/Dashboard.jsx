import { useEffect } from "react";
import { Link } from "react-router-dom";
import TaskCard from "../../components/TaskCard/tasksCard.jsx";
import { useTasks } from "../../context/taskContext.jsx";
import { DashboardContainer, TaskGrid, EmptyMessage, FabButton } from "./DashBoard.js";

function Dashboard() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) {
      return <EmptyMessage>Aún no creaste tareas</EmptyMessage>;
    }
    return (
      <TaskGrid>
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </TaskGrid>
    );
  }

  return (
    <DashboardContainer>
      <h2>Mis tareas:</h2>
      {renderMain()}
      <Link to="/new">
        <FabButton>+</FabButton>
      </Link>
    </DashboardContainer>
  );
}

export default Dashboard;




// import { useEffect } from "react";
// import TaskCard from "../../components/TaskCard/tasksCard.jsx";
// import { useTasks } from "../../context/taskContext.jsx";
// import { DashboardContainer, TaskGrid, EmptyMessage } from "./DashBoard.js";

// function Dashboard() {
//   const { tasks, loadTasks } = useTasks();

//   useEffect(() => {
//     loadTasks();
//   }, []);

//   function renderMain() {
//     if (tasks.length === 0) {
//       return <EmptyMessage>Aún no creaste tareas</EmptyMessage>;
//     }
//     return (
//       <TaskGrid>
//         {tasks.map((task) => (
//           <TaskCard task={task} key={task.id} />
//         ))}
//       </TaskGrid>
//     );
//   }

//   return (
//     <DashboardContainer>
//       <h2>Mis tareas:</h2>
//       {renderMain()}
//     </DashboardContainer>
//   );
// }

// export default Dashboard;

