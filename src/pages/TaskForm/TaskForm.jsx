import { Formik, Form } from "formik";
import { useTasks } from "../../context/taskContext.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
       console.log(task);
       setTask({
         title: task.title,
         description: task.description,
       });
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <h1>{params.id ? "Editar Tarea" : "Crear Tarea"}</h1>

      <Formik
        initialValues={task} //para usar mi estado de tarea
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          
          if (params.id) {
           await updateTask(params.id, values);
            navigate("/");
          } else {
            await createTask(values);
          }
          setTask({
            title: "",
            description: "",
          });
          // actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Tarea"
              onChange={handleChange}
              value={values.title}
            />

            <label>Description</label>
            <textarea
              type="text"
              name="description"
              rows="3"
              placeholder="Descripción de tarea"
              onChange={handleChange}
              value={values.description}
            />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
