import { useState } from 'react';
import util from '../../../../helpers/utils';

function FormHandler() {
  const [username, setUsername] = useState({
    value: '',
    error: false,
    helperText: '',
  });

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value !== '') {
      setUsername({ value: value, helperText: '', error: false });
    } else {
      setUsername({
        value: value,
        helperText: 'This field is required',
        error: true,
      });
    }
  };

  // EMAIL
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

  const handlePassword = (prop: any) => (event: any) => {
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

  return {
    username,
    handleUsername,
    email,
    handleEmail,
    password,
    handlePassword,
    handleMouseDown,
    handleClickShow,
  };
}

export default FormHandler;
