import { Formik, Form } from "formik";
import { createTaskRequest } from "../../api/tasks.axios.js";

function TaskForm() {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await createTaskRequest(values);
            console.log(response);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Tarea"
              onChange={handleChange}
            />

            <label>Description</label>
            <textarea
              type="text"
              name="description"
              rows="3"
              placeholder="Descripción de tarea"
              onChange={handleChange}
            />

            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
