import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 5%; /* Reducido para que la imagen y el texto se integren mejor */
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 45%; /* Ajustado para que el contenido ocupe un espacio proporcional */
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const HeroDescription = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const HeroCTA = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: var( --btn-color);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  &:hover {
    background-color: var(--color-hover);
  }
`;

export const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 45%; /* Ajustado para que la imagen ocupe un espacio proporcional */
`;

export const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
`;


// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// export const HeroContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 100vh;
//   padding: 0 120px; 
// `;

// export const HeroContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   max-width: 600px; 
// `;

// export const HeroTitle = styled.h1`
//   font-size: 2.5rem;
//   font-weight: bold;
//   margin-bottom: 10px;
// `;

// export const HeroDescription = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 20px;
// `;

// export const HeroCTA = styled(Link)`
//   display: inline-block;
//   padding: 10px 20px;
//   background-color: var( --btn-color);
//   color: white;
//   text-decoration: none;
//   border-radius: 10px;
//   font-size: 16px;
//   font-weight: bold;
//   text-align: center;

//   &:hover {
//     background-color: darkviolet;
//   }
// `;

// export const HeroImageContainer = styled.div`
//   position: absolute;
//   right: 0;
// `;

// export const HeroImage = styled.img`
//   max-width: 100%;
//   height: auto;
//   max-width: 600px;
//   padding: 0 90px;
//   filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
// `;
