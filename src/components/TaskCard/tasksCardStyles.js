import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: flex-start;  //justificado todo a left menos los btn
  width: 100%;
  max-width: 300px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: 10px 0;
  opacity: ${(props) => (props.done ? 0.6 : 1)};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: left;  
  word-wrap: break-word;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
  text-align: left;  
  word-wrap: break-word; //texto ajustado al contenedor
  padding: 5px;
  box-sizing: border-box;
  white-space: pre-wrap; 
  max-width: 250px;
`;

export const Status = styled.span`
  font-size: 1.2rem;
  margin-right: 15px;
  text-align: left; 
`;

export const Date = styled.span`
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 1rem;
  text-align: left; 
`;


export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around; 
  margin-top: 15px;
  width: 100%;  
`;

export const Button = styled.button`
  background-color: var(--btn-color);
  color: white;
  border: solid 1px var(--btn-color);
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-hover); 
    color: white;
  }

  &:first-of-type {
    margin-right: 10px;
  }
`;


export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const StatusPin = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color || "#000"};
  border-radius: 50%;
  margin-right: 8px;
`;