import { useState } from 'react';

function FormHandler() {
  const [currentPassword, setCurrentPassword] = useState({
    value: '',
    error: false,
    helperText: '',
    showPassword: false,
  });

  const handleClick = () => {
    setCurrentPassword({ ...currentPassword, showPassword: !currentPassword.showPassword });
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };

  const handleCurrentPassword = (prop: any) => (event: any) => {
    const value = event.target.value;
    setCurrentPassword({ ...currentPassword, [prop]: value });

    if (value !== '') {
      setCurrentPassword({
        ...currentPassword,
        value: value,
        error: false,
        helperText: '',
      });
    } else {
      setCurrentPassword({
        ...currentPassword,
        value: value,
        helperText: 'This field is required',
        error: true,
      });
    }
  };

 
  const [newPassword, setNewPassword] = useState({
    value: '',
    error: false,
    helperText: '',
  });
  const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length >= 6) {
      setNewPassword({
        ...newPassword,
        value: value,
        helperText: '',
        error: false,
      });
    } else {
      if (value === '') {
        setNewPassword({
          ...newPassword,
          value: value,
          helperText: 'This field is required',
          error: true,
        });
      } else {
        setNewPassword({
          ...newPassword,
          helperText: 'Password must be minimum of 6 characters',
          error: true,
          value: value,
        });
      }
    }
  };
  

  const [confirm, setConfirm] = useState({
    value: '',
    error: false,
    helperText: '',
  });
  const handleConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === newPassword.value) {
      setConfirm({
        ...confirm,
        value: value,
        helperText: '',
        error: false,
      });
    } else {
      if (value === '') {
        setConfirm({
          ...confirm,
          value: value,
          helperText: 'This field is required',
          error: true,
        });
      } else {
        setConfirm({
          ...confirm,
          helperText: 'Password mismatch',
          error: true,
          value: value,
        });
      }
    }
  };

  return {
    currentPassword,
    handleCurrentPassword,
    handleMouseDown,
    handleClick,
    newPassword,
    handleNewPassword,
    confirm,
    handleConfirm,
  };
}

export default FormHandler;
