import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9; 
  padding: 20px;
`;

export const FormTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledLabel = styled.label`
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;
  font-family: var(--primary-font);

  &:focus {
    outline: none;
    border-color: #9b59b6;
    box-shadow: 0 0 5px rgba(155, 89, 182, 0.5);
  }
`;

export const StyledTextarea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;
  resize: none;
  font-family: var(--primary-font);

  &:focus {
    outline: none;
    border-color: #9b59b6;
    box-shadow: 0 0 5px rgba(155, 89, 182, 0.5);
  }
  
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #9b59b6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8e44ad;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const LoadingMessage = styled.span`
  font-size: 1rem;
  color: #666;
`;
