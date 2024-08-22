
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TaskCard from "../../components/TaskCard/tasksCard.jsx";
import { useTasks } from "../../context/taskContext.jsx";
import { DashboardContainer, TaskGrid, EmptyMessage, FabButton } from "./DashBoard.js";
import Modal from "../../components/Modal/Modal";

function Dashboard() {
  const { tasks, loadTasks } = useTasks();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setShowModal(true);
      return; // No cargar las tareas si no hay token
    }
    loadTasks();
  }, [loadTasks]);

  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        navigate('/login');
      }, 4000); // 4 segundos antes de redirigir
    }
  }, [showModal, navigate]);

  function renderMain() {
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
              <p>Debes iniciar sesión para crear y visualizar tus tareas</p>
              <p><i>redirigiendo...</i></p>
            </>
          }
          onClose={handleModalClose} 
        />
      )}
    </>
  );
}

export default Dashboard;
