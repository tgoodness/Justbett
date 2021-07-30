import {useState} from 'react';

function ModalHandler() {
     //Dialog
	const [open, setOpen] = useState(false);
	const showDialog = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

    return [open,showDialog, handleClose];
}

export default ModalHandler;
