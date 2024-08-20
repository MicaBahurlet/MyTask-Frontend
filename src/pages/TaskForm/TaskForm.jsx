import { Formik, Form } from "formik";
import { useTasks } from "../../context/taskContext.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FormContainer, 
  FormTitle, 
  StyledForm, 
  StyledLabel, 
  StyledInput, 
  StyledTextarea, 
  SubmitButton, 
  LoadingMessage 
} from "./TaskStyle.js";

import Footer from "../../components/Footer/Footer.jsx";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
       const task = await getTask(params.id);
       setTask({
         title: task.title,
         description: task.description,
       });
      }
    };
    loadTask();
  }, [params.id, getTask]);

  return (
    <>
      <FormContainer>
        <FormTitle>{params.id ? "Editar Tarea" : "Crear Tarea"}</FormTitle>

        <Formik
          initialValues={task} 
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            if (params.id) {
              await updateTask(params.id, values);
              navigate("/dashboard"); // Redirige a /dashboard después de actualizar
            } else {
              await createTask(values);
              navigate("/dashboard"); // Redirige a /dashboard después de crear
            }
            setTask({
              title: "",
              description: "",
            });
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <StyledForm onSubmit={handleSubmit}>
              <StyledLabel>Título</StyledLabel>
              <StyledInput
                type="text"
                name="title"
                placeholder="Tarea"
                onChange={handleChange}
                value={values.title}
              />

              <StyledLabel>Descripción</StyledLabel>
              <StyledTextarea
                name="description"
                rows="3"
                placeholder="Descripción de tarea"
                onChange={handleChange}
                value={values.description}
              />

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? <LoadingMessage>Guardando...</LoadingMessage> : "Guardar"}
              </SubmitButton>
            </StyledForm>
          )}
        </Formik>
      </FormContainer>
      <Footer />
    </>

  );
}

export default TaskForm;
