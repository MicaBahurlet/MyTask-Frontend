import { useEffect } from "react";
import TaskCard from "../../components/TaskCard/tasksCard.jsx";

import { useTasks } from "../../context/taskContext.jsx";
import Hero from "../../components/Hero/Hero.jsx";

function Home() {

  const { tasks, loadTasks } = useTasks();
  

  useEffect(() => { 
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
    <>
      
      <Hero />

      <div>
        <h2>Mis tareas:</h2>

        {renderMain()}

        
      </div>
    </>  
  );
}

export default Home;
