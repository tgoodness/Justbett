import React, { useState } from 'react';
function FormHandler() {
 
  const [password, setPassword] = useState({
    value: '',
    error: false,
    helperText: '',
    showPassword: false,
  });

  const handleClickShow = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const handlePasword = (prop: any) => (event: any) => {
    const value = event.target.value;
    setPassword({ ...password, [prop]: value });

    if (value.length === 6) {
      setPassword({
        ...password,
        value: value,
        error: false,
        helperText: '',
      });
    } else {
      if (value === '') {
        setPassword({
          ...password,
          helperText: 'This field is required',
          error: true,
        });
      } else {
        setPassword({
          ...password,
          helperText: 'Password must be minimum of 6 characters',
          error: true,
        });
      }
    }
  };

  // Password Start Here
  const [cpassword, setCpassword] = React.useState({
    value: '',
    error: false,
    helperText: '',
    showPassword: false,
  });

  const chandleClickShow = () => {
    setCpassword({ ...cpassword, showPassword: !cpassword.showPassword });
  };

  const chandleMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };

  const chandlePasword = (prop: any) => (event: any) => {
    const value = event.target.value;
    setCpassword({ ...cpassword, [prop]: value });
 
    if (value === password.value) {
      setCpassword({
        ...cpassword,
        value: value,
        error: false,
        helperText: '',
      });
    } else {
      if (value === '') {
        setCpassword({
          ...cpassword,
          helperText: 'This field is required',
          error: true,
        });
      } else {
        setCpassword({
          ...cpassword,
          helperText: 'Password mismatch',
          error: true,
        });
      }
    }
  };

  return {
    password,
    handlePasword,
    handleMouseDown,
    handleClickShow,
    cpassword,
    chandlePasword,
    chandleMouseDown,
    chandleClickShow,
  };
}

export default FormHandler;
