

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: var(--navFooter-color);
  display: flex;
  align-items: center;
  justify-content: space-around; 
  color: white;
  padding: 20px;
  text-align: center;
  height: 9rem;
`;

export const FooterContent = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content : center; 
  max-width: 50%; 
  gap: 3rem;

  p {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start; 
  gap: 1.5rem;
  margin-top: 10px;
`;

export const Icon = styled.img`
  width: 70px;
  height: 70px;
`;

export const LogoMioContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 50%; 
  img {
    width: 130px;
    height: 130px;
  }
`;


// import styled from 'styled-components';

// export const FooterContainer = styled.footer`
//   background: var( --navFooter-color);  
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   color: white;
//   padding: 20px;
//   text-align: center;
//   height: 9rem;
// `;

// export const FooterContent = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;

//   p{
//     font-size: 1.2rem;
//     font-weight: 500;
//     margin-bottom: 1rem;
//   }
// `;

// export const IconContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 1.5rem; 
//   margin-top: 10px;
// `;

// export const Icon = styled.img`
//   width: 70px; 
//   height: 70px;
  
// `;

// export const LogoMioContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   img {
//     width: 100px;
//     height: 100px;
//   }
// `;

