import axios from "axios";
import { BASE_URL } from "../utils/const";

// Registrar un nuevo usuario
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud de registro:", error); // Agregar mensaje de error
    throw error.response ? error.response.data : { message: 'Error en la conexión con el servidor' };
  }
};

// Iniciar sesión
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud de inicio de sesión:", error); // Agregar mensaje de error
    throw error.response ? error.response.data : { message: 'Error en la conexión con el servidor' };
  }
};
