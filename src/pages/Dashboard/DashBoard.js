// import styled from "styled-components";

// export const DashboardContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   h2 {
//     margin-top: 3rem;
//     margin-bottom: 3rem;
//     font-size: 2.5rem;
//   }
// `;


// export const TaskGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 20px;
//   width: 100%;
//   max-width: 1200px;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(2, 1fr); 
//   }

//   @media (max-width: 480px) {
//     grid-template-columns: 1fr;
//   }
// `;

// export const EmptyMessage = styled.h3`
//   font-size: 1.5rem;
//   color: #666;
// `;

// export const FabButton = styled.button`
//   position: fixed;
//   bottom: 20px;
//   right: 30px;
//   width: 60px;
//   height: 60px;
//    background-color: var( --navFooter-color);
//    margin: 3rem 3rem;

//   border: solid 1px var( --navFooter-color);
//   border-radius: 50%;
//   color: whitesmoke; /* Color del signo + */
//   font-size: 2rem;
//   font-weight: bold;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  
//   &:hover {
//     background-color: var(--color-hover);
//   }
// `;
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  
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
  color: #999;
`;
