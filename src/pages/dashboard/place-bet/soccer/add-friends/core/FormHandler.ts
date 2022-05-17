import { useState } from 'react';

function FormHandler() {
  //if play with friend is selected
  const [amount, setAmount] = useState('');
  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  return { amount, handleAmount };
}

export default FormHandler;
