import { useState } from 'react';


function FormHandler() {
 
  const [color, setTeam] = useState('');
  const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {

    setTeam(e.target.value);
  };

  return { color, handleColor };
}

export default FormHandler;
