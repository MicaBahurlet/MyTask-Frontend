import { useState } from 'react';

const PasswordVisibility = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return {
    visible,
    toggleVisibility,
    inputType: visible ? 'text' : 'password',
    icon: visible ?'🙈' : '👁️' ,  
  };
};

export default PasswordVisibility;
