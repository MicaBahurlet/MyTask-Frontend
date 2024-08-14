import styled from "styled-components";

export const Card = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px 0;
  transition: transform 0.2s ease-in-out;


  &:hover {
    transform: translateY(-5px);
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
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
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:first-of-type {
    margin-right: 10px;
  }
`;
