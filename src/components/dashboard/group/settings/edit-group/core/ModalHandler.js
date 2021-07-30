import { useState } from 'react';

function ModalHandler(closeMenu) {
  //Dialog
  const [open, setOpen] = useState(false);
  const showDialog = () => {
    closeMenu();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return [open, showDialog, handleClose];
}

export default ModalHandler;
