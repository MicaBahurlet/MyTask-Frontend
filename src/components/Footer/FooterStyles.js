

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: var(--navFooter-color);
  display: flex;
  align-items: center;
  justify-content: space-around; 
  color: whitesmoke;
  width: 100%;
  /* position: absolute;
  bottom: 0; */
  padding: 5px 10px;

`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content : center; 
  max-width: 50%; 
  gap: 3rem;

  p {
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 1rem;
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
  flex-direction: column;
  /* justify-content: flex-end; */
  align-items: start;
  max-width: 50%; 
  img {
    width: 110px;
    height: 110px;
  }
  p{
    margin-bottom: 1rem;
  }
`;