import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import TaskForm from "./pages/TaskForm/TaskForm.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </>
  );
}

export default App;
