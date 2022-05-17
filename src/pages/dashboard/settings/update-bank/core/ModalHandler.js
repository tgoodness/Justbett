import {useState} from 'react';

function ModalHandler() {
  const [open, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};
    return [open,showModal, handleCancel];
}

export default ModalHandler;
