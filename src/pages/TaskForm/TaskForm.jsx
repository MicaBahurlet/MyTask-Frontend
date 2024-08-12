import { Formik, Form } from "formik";

import { useTasks } from "../../context/taskContext.jsx";


function TaskForm() {

  const { createTask } = useTasks();

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          createTask(values);
          actions.resetForm();
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
