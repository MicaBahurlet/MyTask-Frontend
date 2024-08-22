import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 90px;
  max-width: 1200px;
  margin: 6rem auto;
  gap: 5rem;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 10px;
  }
`;

export const RegisterWrapper = styled.div`
  flex: 1;
  max-width: 400px;
`;

export const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RegisterField = styled.input`
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 100%;  /* ancho de inputs */

  &:focus {
    border-color: darkviolet;
    outline: none;
  }
`;

export const RegisterButton = styled.button`
  padding: 15px;
  border-radius: 10px;
  border: none;
  background-color: var( --btn-color);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;  

  &:disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }
  &:hover {
    background-color: var(--color-hover);
  }
`;

export const RegisterError = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 5px;
`;

export const Loader = styled.div`
  border: 4px solid lightgray;
  border-top: 4px solid white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
