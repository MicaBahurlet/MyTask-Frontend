
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TaskCard from "../../components/TaskCard/tasksCard.jsx";
import { useTasks } from "../../Context/TaskContext.jsx";
import { DashboardContainer, Sidebar, TaskGrid, EmptyMessage, FabButton, SearchInput, SearchWrapper, SearchIcon, ContentContainer } from "./DashBoard.js";
import Modal from "../../components/Modal/Modal";
import CalendarWidget from "../../components/Calendar/CalendarWidget.jsx";
import TaskStatusIndicator from "../../components/TasksStatus/TasksStatus.jsx";

function Dashboard() {
  const { tasks, loadTasks, clearTasks } = useTasks();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');//poder acceder al token ya que quiero que cargue las tareas solo si hay un token
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
      }, 4000);
    }
  }, [showModal, navigate]);

  useEffect(() => {
    const searchResults = tasks.filter(task =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTasks(searchResults);
  }, [searchTerm, tasks]);

  function renderMain() {
    if (searchTerm && filteredTasks.length === 0) {
      return <EmptyMessage>Ninguna tarea coincide con esa palabra</EmptyMessage>;
    }
    if (filteredTasks.length === 0) {
      return <EmptyMessage>Aún no creaste tareas</EmptyMessage>;
    }
    return (
      <TaskGrid>
        {filteredTasks.map((task) => (
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
        <Sidebar>
          <h2>Buscar Tareas</h2>
          <SearchWrapper>
            <SearchInput 
              type="text" 
              placeholder="Buscar tareas..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <SearchIcon />
          </SearchWrapper>
          <TaskStatusIndicator />
          <CalendarWidget />
          
        </Sidebar>
        <ContentContainer>
          <h2>Mis tareas:</h2>
          {renderMain()}
        </ContentContainer>
        <Link to="/new">
          <FabButton>+</FabButton>
        </Link>
      </DashboardContainer>
      {/* <Footer /> */}
      {showModal && (
        <Modal 
          message={
            <>
              <p>Debes iniciar sesión para crear y visualizar tus tareas</p>
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
