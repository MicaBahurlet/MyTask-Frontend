import styled from "styled-components";

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: violet;
    color: #fff;
`

export const NavLogo = styled.h1`
    font-size: 1.5rem;
`

export const NavLinks = styled.ul`
    display: flex;
    list-style: none;
    gap: 1rem;
    font-size: 1.2rem;

    li {
        cursor: pointer;
        display: flex;
    }
`