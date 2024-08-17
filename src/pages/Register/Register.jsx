import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  RegisterContainer,
  ImageContainer,
  RegisterWrapper,
  RegisterForm,
  RegisterField,
  RegisterButton,
  RegisterError,
  Loader,
} from './RegisterStyles.js';
import ImgRegister from '../../img/Task1.png';  
import Footer from '../../components/Footer/Footer.jsx';

const RegisterPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        <RegisterContainer>
        <RegisterWrapper>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
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
                <RegisterButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? <Loader /> : 'Registrarse'}
                </RegisterButton>
                <p>¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a></p>
                </RegisterForm>
            )}
            </Formik>
        </RegisterWrapper>
        <ImageContainer>
            <img src={ImgRegister} alt="Registro" />
        </ImageContainer>
        
        </RegisterContainer>
        <Footer />
    </>
  );
};

export default RegisterPage;
