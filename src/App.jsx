import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import TaskForm from "./pages/TaskForm/TaskForm.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Login from "./pages/Login/Login.jsx";

import { TaskContextProvider } from "./context/taskContext.jsx";

function App() {
  return (
    
      <TaskContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </TaskContextProvider>
    
  );
}

export default App;
