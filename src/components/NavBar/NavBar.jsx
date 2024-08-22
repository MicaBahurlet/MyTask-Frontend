
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavContainer, NavLogo, NavLinks } from './NavbarStyles.js';

function NavBar() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token'); // Verifica si hay un token en localStorage

    const handleLogout = () => {
        localStorage.removeItem('token'); // Elimina el token del localStorage
        navigate('/login'); // Redirige al usuario a la página de login
    };

    return (
        <NavContainer>
            <NavLogo>
                <h1>MyTask</h1>
            </NavLogo>
            <NavLinks>
                <li><Link to="/">Home</Link></li>
                {!token ? (
                    <li><Link to="/login">Iniciar Sesión</Link></li>
                ) : (
                    <li><button onClick={handleLogout}>Cerrar Sesión</button></li>
                )}
                <li><Link to="/dashboard">Mis Tareas</Link></li>
                {/* <li><Link to="/new">Crear Tarea</Link></li> */}
            </NavLinks>
        </NavContainer>
    );
}

export default NavBar;
