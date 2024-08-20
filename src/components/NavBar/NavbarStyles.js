// import styled from "styled-components";

// export const NavContainer = styled.nav`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 2rem 2rem;
//     background: var( --navFooter-color); 
//     /* background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2); 
//     background: linear-gradient(to right, #4A00E0, #8E2DE2);  */
//     color: #fff;
//     height: 5rem;


// `;

// export const NavLogo = styled.h1`
//     font-size: 1.5rem;
// `;

// export const NavLinks = styled.ul`
//     display: flex;
//     list-style: none;
//     gap: 2rem;
//     font-size: 1.2rem;
//     font-weight: 600;

//     li {
//         cursor: pointer;
//         display: flex;

//         a {
//             color: white;
//             text-decoration: none;

//             &:visited {
//                 color: white;
//             }

//             &:hover {
//                 font-weight: 800;
//             }
//         }
//     }
// `;


import styled from "styled-components";

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem;
    background: var(--navFooter-color); 
    color: #fff;
    height: 5rem;
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
    font-family: var( --primary-font);

    li {
        cursor: pointer;
        display: flex;
        font-family: var( --primary-font);

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

        button {
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            font-weight: 600;
            cursor: pointer;
            padding: 0;
            margin: 0;
            outline: none;
            
            &:hover {
                font-weight: 800;
            }
        }
    }
`;
