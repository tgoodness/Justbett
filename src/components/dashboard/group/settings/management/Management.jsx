import React from 'react';
import { Modal } from 'antd';
import '../../../../../lib/style/dashboard/group/group-management.scss';

function Dialog(props) {
  const { visible, handleCancel } = props;

  return (
    <Modal
      visible={visible}
      onCancel={handleCancel}
      footer={false}
      closable={false}
      centered={true}
      maskClosable={false}
    >
      <div className="group-management">
        <h5>Manage Participant</h5>

        <div className="action-wrapper">
          <h6>Make group admin</h6>
          <h6>Remove Goodness</h6>
        </div>

        <div className="close-footer">
          <h6 onClick={handleCancel}>Close</h6>
        </div>
      </div>
    </Modal>
  );
}

export default Dialog;
