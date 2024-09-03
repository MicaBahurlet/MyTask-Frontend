
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LoginContainer, LoginForm, LoginField, LoginButton, LoginError, Loader, ImageContainer, LoginWrapper, PasswordWrapper, ToggleIcon } from './LoginStyles';
import ImgLogin from '../../img/Task2.png';
import Footer from '../../components/Footer/Footer.jsx';
import { loginUser } from '../../api/user.axios.js';
import { Bounce, Fade, Flip, Zoom } from 'react-awesome-reveal';
import axios from 'axios';

// Importamos los nuevos íconos elegantes
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const LoginPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // state para la password
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
    password: Yup.string().required('Contraseña es requerida'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    setIsSubmitting(true);
    setLoginError(null);

    try {
      const response = await loginUser({
        email: values.email,
        password: values.password
      });

      localStorage.setItem('token', response.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.token}`;

      navigate('/dashboard');
    } catch (error) {
      setLoginError(error.message || 'Error en el inicio de sesión');
    }
    
    setIsSubmitting(false);
    setSubmitting(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const renderIcon = () => {
    return showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />;
  };

  return (
    <>
      <LoginContainer>
        <ImageContainer>
          <Fade direction="left"  duration={2000}>
            <img src={ImgLogin} alt="Login" />
          </Fade>
        </ImageContainer>
        <LoginWrapper>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <LoginForm>
                  <h1>Iniciar sesión:</h1>
                  <div>
                    <Field name="email" as={LoginField} placeholder="Correo Electrónico" />
                    <ErrorMessage name="email" component={LoginError} />
                  </div>
                  <div>
                    <PasswordWrapper>
                      <Field 
                        name="password" 
                        as={LoginField} 
                        type={showPassword ? 'text' : 'password'} 
                        placeholder="Contraseña" 
                      />
                      <ToggleIcon onClick={togglePasswordVisibility}>
                        {renderIcon()}
                      </ToggleIcon>
                    </PasswordWrapper>
                    <ErrorMessage name="password" component={LoginError} />
                  </div>
                  {loginError && <LoginError>{loginError}</LoginError>}
                  <LoginButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? <Loader /> : 'Iniciar Sesión'}
                  </LoginButton>
                  <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
                </LoginForm>
              </Form>
            )}
          </Formik>
        </LoginWrapper>
      </LoginContainer>
      <Footer />
    </>
  );
};

export default LoginPage;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { LoginContainer, LoginForm, LoginField, LoginButton, LoginError, Loader, ImageContainer, LoginWrapper } from './LoginStyles';
// import ImgLogin from '../../img/Task2.png';
// import Footer from '../../components/Footer/Footer.jsx';
// import { loginUser } from '../../api/user.axios.js';
// import { Bounce, Fade, Flip, Zoom } from 'react-awesome-reveal';
// import axios from 'axios';


// const LoginPage = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [loginError, setLoginError] = useState(null);
//   const navigate = useNavigate();

//   const initialValues = {
//     email: '',
//     password: ''
//   };

//   const validationSchema = Yup.object({
//     email: Yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
//     password: Yup.string().required('Contraseña es requerida'),
//   });

//   const onSubmit = async (values, { setSubmitting }) => {
//     setIsSubmitting(true);
//     setLoginError(null);

//     console.log("Intentando iniciar sesión con:", values);

//     try {
//       const response = await loginUser({
//         email: values.email,
//         password: values.password
//       });

//       console.log("Respuesta del servidor:", response);

//       localStorage.setItem('token', response.token);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${response.token}`;

//       navigate('/dashboard');
//     } catch (error) {
//       console.error("Error en el inicio de sesión:", error);
//       setLoginError(error.message || 'Error en el inicio de sesión');
//     }
    
//     setIsSubmitting(false);
//     setSubmitting(false);
//   };

//   return (
//     <>
//       <LoginContainer>
//         <ImageContainer>
//           <Fade direction="left"  duration={2000}>
//             <img src={ImgLogin} alt="Login" />
//           </Fade>
//         </ImageContainer>
//         <LoginWrapper>
          
//             <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
//               {({ isSubmitting }) => (

//                   <Form>
//                     <LoginForm>
//                       <h1>Iniciar sesión:</h1>
//                       <div>
//                         <Field name="email" as={LoginField} placeholder="Correo Electrónico" />
//                         <ErrorMessage name="email" component={LoginError} />
//                       </div>
//                       <div>
//                         <Field name="password" as={LoginField} type="password" placeholder="Contraseña" />
//                         <ErrorMessage name="password" component={LoginError} />
//                       </div>
//                       {loginError && <LoginError>{loginError}</LoginError>}
//                       <LoginButton type="submit" disabled={isSubmitting}>
//                         {isSubmitting ? <Loader /> : 'Iniciar Sesión'}
//                       </LoginButton>
//                       <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
//                     </LoginForm>
//                   </Form>

//               )}
//             </Formik>

//         </LoginWrapper>
//       </LoginContainer>
//       <Footer />
//     </>
//   );
// };

// export default LoginPage;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import {
//   LoginContainer,
//   LoginForm,
//   LoginField,
//   LoginButton,
//   LoginError,
//   Loader,
//   ImageContainer,
//   LoginWrapper,
//   PasswordWrapper,
//   ToggleIcon,
// } from './LoginStyles';
// import ImgLogin from '../../img/Task2.png';
// import Footer from '../../components/Footer/Footer.jsx';
// import { loginUser } from '../../api/user.axios.js';
// import { Fade } from 'react-awesome-reveal';
// import axios from 'axios';
// import useTogglePasswordVisibility from '../../hooks/PasswordVisibility.jsx';

// const LoginPage = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [loginError, setLoginError] = useState(null);
//   const navigate = useNavigate();

//   const { visible, toggleVisibility, inputType, icon } = useTogglePasswordVisibility();

//   const initialValues = {
//     email: '',
//     password: ''
//   };

//   const validationSchema = Yup.object({
//     email: Yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
//     password: Yup.string().required('Contraseña es requerida'),
//   });

//   const onSubmit = async (values, { setSubmitting }) => {
//     setIsSubmitting(true);
//     setLoginError(null);

//     try {
//       const response = await loginUser({
//         email: values.email,
//         password: values.password
//       });

//       localStorage.setItem('token', response.token);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${response.token}`;

//       navigate('/dashboard');
//     } catch (error) {
//       setLoginError(error.message || 'Error en el inicio de sesión');
//     }

//     setIsSubmitting(false);
//     setSubmitting(false);
//   };

//   return (
//     <>
//       <LoginContainer>
//         <ImageContainer>
//           <Fade direction="left" duration={2000}>
//             <img src={ImgLogin} alt="Login" />
//           </Fade>
//         </ImageContainer>
//         <LoginWrapper>
//           <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
//             {({ isSubmitting }) => (
//               <Form>
//                 <LoginForm>
//                   <h1>Iniciar sesión:</h1>
//                   <div>
//                     <Field name="email" as={LoginField} placeholder="Correo Electrónico" />
//                     <ErrorMessage name="email" component={LoginError} />
//                   </div>
//                   <div>
//                     <PasswordWrapper>
//                       <Field name="password" as={LoginField} type={inputType} placeholder="Contraseña" />
//                       <ToggleIcon onClick={toggleVisibility}>{icon}</ToggleIcon>
//                     </PasswordWrapper>
//                     <ErrorMessage name="password" component={LoginError} />
//                   </div>
//                   {loginError && <LoginError>{loginError}</LoginError>}
//                   <LoginButton type="submit" disabled={isSubmitting}>
//                     {isSubmitting ? <Loader /> : 'Iniciar Sesión'}
//                   </LoginButton>
//                   <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
//                 </LoginForm>
//               </Form>
//             )}
//           </Formik>
//         </LoginWrapper>
//       </LoginContainer>
//       <Footer />
//     </>
//   );
// };

// export default LoginPage;