import { useEffect, useState } from "react"
import { getTasksRequest } from "../../api/tasks.axios.js"

import TaskCard from "../../components/TaskCard/tasksCard.jsx"

function Home() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function loadTasks() {
            const response = await getTasksRequest();
            setTasks(response.data);
        }
        loadTasks()

    }, [])
    return (
        <div>
            <h2>Mis tareas:</h2>

            {
            tasks.map(task => 
                
                <TaskCard task={task} key={task.id} />
            )
        }


        </div>

        
    )
}

export default Home