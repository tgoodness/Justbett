import React, { useState } from 'react';

const Handler = () => {
  const [visible, setIsModalVisible] = useState(false);
  const [itemId, setItemId] = useState('');

  const showModal = () => {
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
