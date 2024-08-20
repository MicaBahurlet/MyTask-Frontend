import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: 10px 0;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: flex-start;
  word-wrap: break-word; /* Permite que el texto se ajuste dentro del contenedor */
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
  text-align: flex-start;
  word-wrap: break-word; /* Permite que el texto se ajuste dentro del contenedor */
  padding: 5px;
  box-sizing: border-box;
  white-space: pre-wrap; /* Mantiene los saltos de línea */
  max-width: 250px;
`;

export const Status = styled.span`
  font-size: 1.2rem;
  margin-right: 15px;
`;

export const Date = styled.span`
  font-size: 0.9rem;
  color: #999;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Button = styled.button`
  background-color: var( --btn-color);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-hover); 
  }

  &:first-of-type {
    margin-right: 10px;
  }
`;
