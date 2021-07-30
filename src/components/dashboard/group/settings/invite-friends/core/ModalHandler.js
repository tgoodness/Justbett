import { useState } from 'react';

function ModalHandler(closeMenu = null) {
  //Dialog
  const [open, setOpen] = useState(false);
  const showDialog = () => {
    if (closeMenu) {
      closeMenu();
    }

    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return [open, showDialog, handleClose];
}

export default ModalHandler;
