import { useState } from 'react';
function FormHandler() {
  const [amount, setAmount] = useState({
    value: '',
    error: false,
    helperText: '',
  });

  const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      
      if (amount.value) {
        if (parseInt(value) < 100) {
            setAmount({
            value,
            helperText: 'Minimum amount is N50',
            error: true,
            });
            
            return;
        }
        
      setAmount({
        value,
        helperText: '',
        error: false,
      });
          
    } else {
      setAmount({
        value,
        helperText: 'Amount is required',
        error: true,
      });
    }
  };

  return { amount, onChangeAmount };
}

export default FormHandler;
