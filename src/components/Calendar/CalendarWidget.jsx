import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { CalendarWrapper } from './CalendarStyles.js'; 

const CalendarWidget = () => {
  const [date, setDate] = useState(new Date());

  return (
    <CalendarWrapper>
      <Calendar
        onChange={setDate}
        value={date}
        locale="es-ES" // región
      />
    </CalendarWrapper>
  );
};

export default CalendarWidget;
