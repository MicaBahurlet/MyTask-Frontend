import axios from "axios";
import { BASE_URL } from "../utils/const";



export const getTasksRequest = async () =>
  await axios.get(`${BASE_URL}/tasks`);


export const createTaskRequest = async (task) =>
  await axios.post(`${BASE_URL}/tasks`, task);

// a los errores los manejo desde formik, por eso lo exporto así

export const deleteTaskRequest = async (id) =>
  await axios.delete(`${BASE_URL}/tasks/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`${BASE_URL}/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`${BASE_URL}/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`${BASE_URL}/tasks/${id}`, {
    done, 
  });
