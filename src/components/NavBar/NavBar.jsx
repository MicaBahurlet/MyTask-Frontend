
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavContainer, NavLogo, NavLinks } from './NavbarStyles.js';

function NavBar() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token'); // verifica si hay un token en localStorage

    const handleLogout = () => {
        localStorage.removeItem('token'); // elimina el token del localStorage
        navigate('/'); // redirige al usuario a la página de Home
    };

    return (
        <NavContainer>
            <NavLogo>
                <h1>MyTask</h1>
            </NavLogo>
            <NavLinks>
                <li><Link to="/">Home</Link></li>
                
                <li><Link to="/tips">Tips</Link></li>
                <li><Link to="/dashboard">Mis Tareas</Link></li>
                {!token ? (
                    <li><Link to="/login">Iniciar Sesión</Link></li>
                ) : (
                    <li><button onClick={handleLogout}>Cerrar Sesión</button></li>
                )}
                
                
            </NavLinks>
        </NavContainer>
    );
}

export default NavBar;
