import { useState } from 'react';

function FormHandler() {
  const [category, setCategory] = useState('');
  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const [color, setColor] = useState('');
  const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return { category, handleCategory,color,handleColor};
}

export default FormHandler;
