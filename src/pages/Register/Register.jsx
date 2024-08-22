import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { RegisterContainer, ImageContainer, RegisterWrapper, RegisterField, RegisterButton, RegisterError, Loader, RegisterForm } from './RegisterStyles.js';
import ImgRegister from '../../img/Task1.png';  
import Footer from '../../components/Footer/Footer.jsx';
import { registerUser } from '../../api/user.axios.js';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal'; 
import { Fade } from 'react-awesome-reveal';

const RegisterPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registerError, setRegisterError] = useState(null);
  const [showModal, setShowModal] = useState(false); // para controlar el modal
  const navigate = useNavigate();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Nombre es requerido'),
    lastName: Yup.string().required('Apellido es requerido'),
    email: Yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
    password: Yup.string().required('Contraseña es requerida'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    setIsSubmitting(true);
    setRegisterError(null);

    try {
      await registerUser({
        username: `${values.firstName} ${values.lastName}`,
        email: values.email,
        password: values.password,
      });
      setShowModal(true); // mostrar el modal 
    } catch (error) {
      setRegisterError(error.response?.data?.message || 'Error en el registro');
    }
    
    setIsSubmitting(false);
    setSubmitting(false);
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/login'); // redireccion al cerrar el modal
  };

  return (
    <>
      <RegisterContainer>
        
        <RegisterWrapper>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <RegisterForm>
                  <h1>Regístrate:</h1>
                  <div>
                    <Field name="firstName" as={RegisterField} placeholder="Nombre" />
                    <ErrorMessage name="firstName" component={RegisterError} />
                  </div>
                  <div>
                    <Field name="lastName" as={RegisterField} placeholder="Apellido" />
                    <ErrorMessage name="lastName" component={RegisterError} />
                  </div>
                  <div>
                    <Field name="email" as={RegisterField} placeholder="Correo Electrónico" />
                    <ErrorMessage name="email" component={RegisterError} />
                  </div>
                  <div>
                    <Field name="password" as={RegisterField} type="password" placeholder="Contraseña" />
                    <ErrorMessage name="password" component={RegisterError} />
                  </div>
                  {registerError && <RegisterError>{registerError}</RegisterError>}
                  <RegisterButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? <Loader /> : 'Registrarse'}
                  </RegisterButton>
                  <p>¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a></p>
                </RegisterForm>
              </Form>
            )}
          </Formik>
        </RegisterWrapper>
        <ImageContainer>
          <Fade direction="right"  duration={3000}>
            <img src={ImgRegister} alt="Registro" />
          </Fade>
        </ImageContainer>
      </RegisterContainer>
      <Footer />
      {showModal && (
        <Modal 
          message={
            <>
              <p>¡Registro exitoso! 🎉</p>
              
              <p>Ahora puedes iniciar sesión.</p>
            </>
          }
          onClose={handleModalClose} 
        />
      )}
    </>
  );
};

export default RegisterPage;




