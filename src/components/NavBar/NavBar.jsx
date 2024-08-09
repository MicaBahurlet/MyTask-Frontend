import { Link } from "react-router-dom";
import { NavContainer,
    NavLogo,
    NavLinks
 } from "./NavbarStyles.js";

function NavBar ()  {
    return (
        <>
            <NavContainer>
                
                <NavLogo>
                    <h1>MyTask</h1>
                </NavLogo>         
                    
                        <NavLinks>
                            <li><Link to="/">Home</Link> </li>
                            <li><Link to="/new">Crear Tarea</Link></li>
                        </NavLinks>
                   
                

            </NavContainer>
           
        </>
    );
};

export default NavBar