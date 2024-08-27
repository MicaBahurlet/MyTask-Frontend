
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TaskCard from "../../components/TaskCard/tasksCard.jsx";
import { useTasks } from "../../context/taskContext.jsx";
import { DashboardContainer, TaskGrid, EmptyMessage, FabButton } from "./DashBoard.js";
import Modal from "../../components/Modal/Modal";

function Dashboard() {
  const { tasks, loadTasks, clearTasks } = useTasks();

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem('token'); //poder acceder al token ya que quiero que cargue las tareas solo si hay un token
    if (!token) {
      setShowModal(true);
      clearTasks(); // limpiar las tareas si no hay token
      return; // no cargar las tareas si no hay token
    }
    loadTasks();
  }, []);
  

  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        navigate('/login');
      }, 4000); // 4 segundos antes de redirigir
    }
  }, [showModal, navigate]);

  function renderMain() {
    console.log ("Tareas:", tasks);
    if (tasks.length === 0) {
      return <EmptyMessage>Aún no creaste tareas</EmptyMessage>;
    }
    return (
      <TaskGrid>
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </TaskGrid>
    );
  }

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/login');
  };

  return (
    <>
      <DashboardContainer>
        <h2>Mis tareas:</h2>
        {renderMain()}
        <Link to="/new">
          <FabButton>+</FabButton>
        </Link>
      </DashboardContainer>
      {showModal && (
        <Modal 
          message={
            <>
              <p >Debes iniciar sesión para crear y visualizar tus tareas</p>
              <p style={{ fontSize: '14px', marginTop: '10px', fontWeight: 'lighter' }}><i>Redirigiendo...</i></p>
            </>
          }
          onClose={handleModalClose} 
        />
      )}
    </>
  );
}

export default Dashboard;
