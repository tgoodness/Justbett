import { useState } from "react";
function LogicHandler() {
 
  const inviteLink = "www.justbett.com/register/JB83034";

  const [open, setOpen] = useState(false);
  const handleCopy = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return [inviteLink, open, handleCopy, handleClose];
}

export default LogicHandler;
