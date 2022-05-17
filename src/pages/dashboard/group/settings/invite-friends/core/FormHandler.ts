import { useState } from 'react';

function FormHandler() {

  const [amount, setAmount] = useState('');
  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  return [amount, handleAmount];
}

export default FormHandler;
