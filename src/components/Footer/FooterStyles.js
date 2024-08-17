import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: violet; /* Color de fondo igual al del botón */
  color: white;
  padding: 20px;
  text-align: center;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px; /* Espacio entre íconos */
  margin-top: 10px;
`;

export const Icon = styled.img`
  width: 40px; /* Tamaño pequeño para los íconos */
  height: 40px;
`;
