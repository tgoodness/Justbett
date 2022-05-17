import { useState } from 'react';




function FormHandler() {
 
   const [player, setPlayer] = useState('');
  const handlePlayer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayer(e.target.value);
  };

  const [category, setCategory] = useState('');
  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const [color, setColor] = useState('');
  const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  
  return {
   player, handlePlayer, category, handleCategory,color,handleColor
  };
}

export default FormHandler;
