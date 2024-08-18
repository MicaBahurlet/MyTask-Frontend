import styled from "styled-components";

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background: var( --navFooter-color); 
    /* background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2); 
    background: linear-gradient(to right, #4A00E0, #8E2DE2);  */
    color: #fff;
    height: 4rem;
    /* border-radius: 10px; */
`;

export const NavLogo = styled.h1`
    font-size: 1.5rem;
`;

export const NavLinks = styled.ul`
    display: flex;
    list-style: none;
    gap: 2rem;
    font-size: 1.2rem;
    font-weight: 600;

    li {
        cursor: pointer;
        display: flex;

        a {
            color: white;
            text-decoration: none;

            &:visited {
                color: white;
            }

            &:hover {
                font-weight: 800;
            }
        }
    }
`;
