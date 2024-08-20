import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  h2 {
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }
`;


export const TaskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyMessage = styled.h3`
  font-size: 1.5rem;
  color: #666;
`;

export const FabButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 30px;
  width: 60px;
  height: 60px;
   background-color: var( --navFooter-color);
  /* background: linear-gradient(to right, #4286f4, #373B44); */ 
  border: solid 1px var( --navFooter-color);
  border-radius: 50%;
  color: whitesmoke; /* Color del signo + */
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: var(--color-hover);
  }
`;
