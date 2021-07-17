import { useState } from 'react';
function LogicHandler() {
    const [visible, setIsVisible] = useState({visible: false,register: false, login:false, forgotPassword: false});

  const showRegister = () => {
    setIsVisible({visible: true,register: true, login:false, forgotPassword: false});
  };

   const showLogin = () => {
    setIsVisible({visible: true,register: false, login:true, forgotPassword: false});
  };

  const showForgotPassword = () => {
    setIsVisible({visible: true,register: false, login:false, forgotPassword: true});
  };

  const handleCancel = () => {
    setIsVisible({visible: false,register: false, login:false, forgotPassword: false});
  };

  return {visible, showRegister, showLogin,showForgotPassword,handleCancel};
}

export default LogicHandler;
