import React, { useState } from 'react';
import { Modal } from 'antd';
import { Icon } from '@iconify/react';
import editOutline from '@iconify/icons-eva/edit-outline';

import InputImage from '../../../../../lib/control/InputImageAndIcon';
import Input from '../../../../../lib/control/InputIcon';

import '../../../../../lib/style/dashboard/group/edit-group.scss';
import GroupIcon from '../../../../../lib/assets/stones/iclas.png';
import NGN from '../../../../../lib/assets/dashboard/ngn.png';

function Groups(props) {
  const { visible, handleCancel } = props;
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(true);
  };

  return (
    <Modal
      visible={visible}
      onCancel={handleCancel}
      title="Edit Group"
      footer={false}
      centered={true}
    >
      <div className="edit-group">
        <div className="group-info">
          <img src={GroupIcon} alt="Group Icon" />
          <div>
            {toggle ? (
              <Input label="Group Name" icon={<Icon icon={editOutline} className="group-name-icon" />} />
            ) : (
              <>
                <h6>Group Name</h6>
                <h5>
                  <span onClick={handleToggle}>
                    iClass <Icon icon={editOutline} />
                  </span>
                </h5>
              </>
            )}
          </div>
        </div>
        <div className="amount-wrapper">
          <InputImage label="Amount" img={NGN} icon={<Icon icon={editOutline} />} />
        </div>

        <div className="btn-wrapper">
          <button className="btn btn-black">Edit</button>
        </div>
      </div>
    </Modal>
  );
}

export default Groups;
