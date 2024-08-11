import axios from "axios";

export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:8080/tasks", task);

// a los errores los manejo desde formik, por eso lo exporto así


