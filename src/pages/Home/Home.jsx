import { useEffect, useState } from "react";
import { getTasksRequest } from "../../api/tasks.axios.js";

import TaskCard from "../../components/TaskCard/tasksCard.jsx";

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const response = await getTasksRequest();
      setTasks(response.data);
    }
    loadTasks();
  }, []);

  function renderMain () {

    if (tasks.length === 0) {
      return <h3>Aún no creaste tareas</h3>
    }
    return tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
    ))
  }

  return (
    <div>
      <h2>Mis tareas:</h2>

      {renderMain()}

      
    </div>
  );
}

export default Home;
