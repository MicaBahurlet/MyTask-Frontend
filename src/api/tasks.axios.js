import axios from "axios";
import { BASE_URL } from "../utils/const";



export const getTasksRequest = async () =>
  await axios.get(`${BASE_URL}/tasks`);


export const createTaskRequest = async (task) =>
  await axios.post(`${BASE_URL}/tasks`, task);

// a los errores los manejo desde formik, por eso lo exporto así


