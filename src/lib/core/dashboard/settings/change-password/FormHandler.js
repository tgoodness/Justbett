import { useState } from "react";

function FormHandler() {
  // OLD PASSWORD
  const [oldPassword, setOldPassword] = useState({
    value: "",
    error: false,
    helperText: "",
    showPassword: false,
  });

  const handleClick = () => {
    setOldPassword({ ...oldPassword, showPassword: !oldPassword.showPassword });
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  const handleOldPassword = (prop) => (event) => {
    const value = event.target.value;
    setOldPassword({ ...oldPassword, [prop]: value });

    if (value !== "") {
      setOldPassword({
        ...oldPassword,
        value: value,
        error: false,
        helperText: "",
      });
    } else {
      setOldPassword({
        ...oldPassword,
        value: value,
        helperText: "This field is required",
        error: true,
      });
    }
  };

  //NEW PASSWORD
  const [newPassword, setNewPassword] = useState({
    value: "",
    error: false,
    helperText: "",
  });
  const handleNewPassword = (e) => {
    const value = e.target.value;

    if (value.length >= 6) {
      setNewPassword({
        ...newPassword,
        value: value,
        helperText: "",
        error: false,
      });
    } else {
      if (value === "") {
        setNewPassword({
          ...newPassword,
          value: value,
          helperText: "This field is required",
          error: true,
        });
      } else {
        setNewPassword({
          ...newPassword,
          helperText: "Password must be minimum of 6 characters",
          error: true,
          value: value,
        });
      }
    }
  };

  //CONFRIM PASSWORD
  const [confirm, setConfirm] = useState({
    value: "",
    error: false,
    helperText: "",
  });
  const handleConfirm = (e) => {
    const value = e.target.value;

    if (value === newPassword.value) {
      setConfirm({
        ...confirm,
        value: value,
        helperText: "",
        error: false,
      });
    } else {
      if (value === "") {
        setConfirm({
          ...confirm,
          value: value,
          helperText: "This field is required",
          error: true,
        });
      } else {
        setConfirm({
          ...confirm,
          helperText: "Password mismatch",
          error: true,
          value: value,
        });
      }
    }
  };

  return [
    oldPassword,
    handleOldPassword,
    handleMouseDown,
    handleClick,
    newPassword,
    handleNewPassword,
    confirm,
    handleConfirm,
  ];
}

export default FormHandler;
