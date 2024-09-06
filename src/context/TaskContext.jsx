

import { createContext, useContext, useState } from "react";
import {
  getTasksRequest,
  deleteTaskRequest,
  createTaskRequest,
  getTaskRequest,
  updateTaskRequest,
  toggleTaskDoneRequest,
} from "../api/tasks.axios.js";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error(
      "el hook useTask debería estar dentro de TaskContextProvider"
    );
  }

  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    try {
      const response = await getTasksRequest();
      console.log('Tareas cargadas:', response.data); //  verificacion de usuario, quiero que me traiga solo las tareas de ese user
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteTask = async (id) => {
    try {
      await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task);
      console.log('Tarea creada:', response.data); // verificar la respuesta
      await loadTasks(); // vuelve a cargar las tareas después de crear una nueva
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id, newFields) => {
    try {
      const response = await updateTaskRequest(id, newFields);
      console.log('Tarea actualizada:', response.data); // verifica la respuesta
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTaskDone = async (id) => {
    try {
      const taskFound = tasks.find((task) => task.id === id);
      await toggleTaskDoneRequest(id, taskFound.done === 0 ? true : false);

      const updatedTasks = tasks.map(task => 
        task.id === id ? { ...task, done: task.done === 0 ? 1 : 0 } : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.log(error);
    }
  };

    //fn para poder limpiar las tareas del localStorage, solo afecta al navegador
 const clearTasks = () => {
    setTasks([]);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
        toggleTaskDone,
        clearTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
