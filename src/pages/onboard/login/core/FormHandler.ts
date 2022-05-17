import { useState } from 'react';
import util from '../../../../helpers/utils';

function FormHandler() {
  // EMAIL START HERE
  const [email, setEmail] = useState({
    value: '',
    error: false,
    helperText: '',
  });

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (util.isEmail(value)) {
      setEmail({ ...email, error: false, value: value });
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

  const [password, setPassword] = useState({
    value: '',
    error: false,
    helperText: '',
    showPassword: false,
  });

  const handleClickShow = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };

  const handlePassword = (prop:any) => (event: any) => {
    const value = event.target.value;
    setPassword({ ...password, [prop]: value });

    if (value !== '') {
      setPassword({
        ...password,
        value: value,
        error: false,
        helperText: '',
      });
    } else {
      setPassword({
        ...password,
        error: true,
        helperText: 'This field is required',
      });
    }
  };

  return { email, handleEmail, password, handlePassword, handleMouseDown, handleClickShow };
}

export default FormHandler;
