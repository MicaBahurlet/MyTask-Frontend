
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const DashboardContainer = styled.div`
  display: flex;
  height: 100vh; 
`;

export const Sidebar = styled.div`
  width: 26%;
  padding: 20px;
  background-color: #f7f7f7;
  border-right: 1px solid #ddd;
  box-sizing: border-box;
  position: sticky;
  top: 0; //para que se mantenga fijo 
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  
  h2 {
    margin-top: 3rem;
    font-size: 2rem;
    color: darkviolet;
  }
`;

export const ContentContainer = styled.div`
  width: 74%;
  padding: 20px;
  overflow-y: auto; //scroll sono en el contentContainer, solo tareas
  box-sizing: border-box;
  

  h2{
    margin-top: 3rem;
    margin-bottom: 1rem;
    font-size: 2rem;

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
  margin-top: 2.7rem;
  color: #666;
`;

export const FabButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 30px;
  width: 70px;
  height: 70px;
  background-color: var(--navFooter-color);
  margin: 3rem 3rem;
  border: solid 1px var(--navFooter-color);
  border-radius: 50%;
  color: whitesmoke;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
  
  &:hover {
    background-color: var(--color-hover);
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: darkviolet;
    outline: none;
  }

  &::placeholder {
    color: #999;
  }
`;

export const SearchIcon = styled(FontAwesomeIcon).attrs({
  icon: faSearch
})`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: darkviolet;
`;
