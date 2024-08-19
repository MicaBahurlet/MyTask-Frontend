import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const TaskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

export const EmptyMessage = styled.h3`
  font-size: 1.5rem;
  color: #666;
`;

export const FabButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #373B44;
  background: linear-gradient(to right, #4286f4, #373B44);
  border: none;
  border-radius: 50%;
  color: violet; /* Color del signo + */
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: #4286f4;
  }
`;
