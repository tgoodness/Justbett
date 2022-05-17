import React, { useState } from 'react';
type Props = {
  handleClose: () => void
}

const Handler = (props: Props) => {
  const { handleClose } = props;

  const [visible, setIsModalVisible] = useState(false);
  const [itemId, setItemId] = useState('');

  const showModal = () => {
    if (handleClose)
      handleClose();
    else
    setIsModalVisible(true);
  };

  const showModalWithId = (e: React.MouseEvent<HTMLElement>) => {
    setItemId(e.currentTarget.id);
    setIsModalVisible(true);
  };


  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return { itemId, visible, showModal, showModalWithId, handleCancel };
};

export default Handler;
