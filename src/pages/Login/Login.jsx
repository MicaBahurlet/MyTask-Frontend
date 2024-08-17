import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  LoginContainer,
  LoginForm,
  LoginField,
  LoginButton,
  LoginError,
  Loader,
  ImageContainer,
  LoginWrapper
} from './LoginStyles';
import ImgLogin from '../../img/Task2.png';
import Footer from '../../components/Footer/Footer.jsx';

const LoginPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: ''
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Nombre es requerido'),
    lastName: Yup.string().required('Apellido es requerido'),
    email: Yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido')
  });

  const onSubmit = (values, { setSubmitting }) => {
    setIsSubmitting(true);
    // Simular un envío de formulario
    setTimeout(() => {
      console.log('Form data', values);
      setIsSubmitting(false);
      setSubmitting(false);
    }, 2000);
  };

  return (
    <>
      <LoginContainer>
        <ImageContainer>
          <img src={ImgLogin} alt="Login" />
        </ImageContainer>
        <LoginWrapper>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <LoginForm>
                <h1>Tus datos:</h1>
                <div>
                  <Field name="firstName" as={LoginField} placeholder="Nombre" />
                  <ErrorMessage name="firstName" component={LoginError} />
                </div>
                <div>
                  <Field name="lastName" as={LoginField} placeholder="Apellido" />
                  <ErrorMessage name="lastName" component={LoginError} />
                </div>
                <div>
                  <Field name="email" as={LoginField} placeholder="Correo Electrónico" />
                  <ErrorMessage name="email" component={LoginError} />
                </div>
                <LoginButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <Loader /> : 'Iniciar Sesión'}
                </LoginButton>
                <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
              </LoginForm>
            )}
          </Formik>
        </LoginWrapper>
      </LoginContainer>
      <Footer />  
    </>
  );
};

export default LoginPage;
