import axiosInstance from "./axios.config";
import { BASE_URL } from "../utils/const"; // toDo: borrar de cada fn el BASE_URL

export const getTasksRequest = async () => {
    return await axiosInstance.get(`${BASE_URL}/tasks`);
    
}

export const createTaskRequest = async (task) => {
  await axiosInstance.post(
    `/tasks`,
    task
  );
};


// a los errores los manejo desde formik, por eso lo exporto así

export const deleteTaskRequest = async (id) =>
  await axiosInstance.delete(`${BASE_URL}/tasks/${id}`);

export const getTaskRequest = async (id) =>
  await axiosInstance.get(`${BASE_URL}/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axiosInstance.put(`${BASE_URL}/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axiosInstance.put(`${BASE_URL}/tasks/${id}`, {
    done,
  });
