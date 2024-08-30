import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 90%;
  margin: 20px 0;
  margin: 20px auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;

  .react-calendar {
    width: 100%;
    border: none;
    border-radius: 15px;
    padding: 0;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    padding: 0 10px;
    gap: 10px;

    button {
      
      background-color: var( --btn-color);
      color: white;
      border: none;
      border-radius: 10px;
      padding: 5px 10px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
      font-family: var(--primary-font);
      font-weight: 500;

      &:hover {
        background-color: var(--color-hover);
      }
    }
  }

  //los numeros de los dias
  .react-calendar__tile {
    font-size: 1rem;
    padding: 10px;
    text-align: center;
    
    
  }
  .react-calendar__month-view__weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1px;
    margin-bottom: 10px;
    padding: 0 5px;
    font-weight: bold;
    color: darkviolet;
    text-align: center;
  }

  .react-calendar__tile--active {
    background-color: darkviolet;
    color: white;
    
  }

  .react-calendar__tile--now {
    background-color: var( --btn-color);
    color: white;
    
  }

  .react-calendar__month-view__days__day--weekend {
        color: gray;

        &:hover,
        &.react-calendar__tile--active {
        color: black;
        }
  }
`;
