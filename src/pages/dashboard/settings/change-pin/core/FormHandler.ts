import { useState } from 'react';

function ChangePinHandler() {
 
  const [oldPin, setOldPin] = useState({
    value: '',
    error: false,
    helperText: '',
    showPin: false,
  });

  const handleClick = () => {
    setOldPin({ ...oldPin, showPin: !oldPin.showPin });
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };

  const handleOldPin = (prop: any) => (event: any) => {
    const value = event.target.value;
    
    if (value.length > 4) {
      return false;
    }
    setOldPin({ ...oldPin, [prop]: value });

    if (value !== '') {
      setOldPin({
        ...oldPin,
        value: value,
        error: false,
        helperText: '',
      });
    } else {
      setOldPin({
        ...oldPin,
        value: value,
        helperText: 'This field is required',
        error: true,
      });
    }
  };

  //NEW Pin
  const [newPin, setNewPin] = useState({
    value: '',
    error: false,
    helperText: '',
  });
  const handleNewPin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    //limit input to 4 digit
    if (value.length > 4) {
      return false;
    }
    if (value.length === 4) {
      setNewPin({
        ...newPin,
        value: value,
        helperText: '',
        error: false,
      });
    } else {
      if (value === '') {
        setNewPin({
          ...newPin,
          value: value,
          helperText: 'This field is required',
          error: true,
        });
      } else {
        setNewPin({
          ...newPin,
          helperText: 'Must be 4 digit characters',
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
    
    if (value.length > 4) {
      return false;
    }

    if (value === newPin.value) {
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
          helperText: 'Pin mismatch',
          error: true,
          value: value,
        });
      }
    }
  };

  return {
    oldPin,
    handleOldPin,
    handleMouseDown,
    handleClick,
    newPin,
    handleNewPin,
    confirm,
    handleConfirm,
  };
}

export default ChangePinHandler;
