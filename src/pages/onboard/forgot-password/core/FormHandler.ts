import { useState } from 'react';
import util from '../../../../helpers/utils';

function FormHandler() {
  const [email, setEmail] = useState({
    value: '',
    error: false,
    helperText: '',
  });

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (util.isEmail(value)) {
      setEmail({ value: value, error: false, helperText: '' });
    } else {
      if (email.value === '') {
        setEmail({
          value: value,
          helperText: 'This field is required',
          error: true,
        });
      } else {
        setEmail({
          value: value,
          helperText: 'Email is invalid',
          error: true,
        });
      }
    }
  };

  return { email, handleEmail };
}

export default FormHandler;
