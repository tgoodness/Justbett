import { useState } from 'react';
import { Modal } from 'antd';
import { Icon } from '@iconify/react';
import editOutline from '@iconify/icons-eva/edit-outline';

import InputImage from '../../../../../components/InputImageAndIcon';
import Input from '../../../../../components/InputIcon';
import { IMAGES } from '../../../../../constant';
import '../../../../../style/dashboard/group/edit-group.scss';

type Props = {
  visible: boolean;
  handleCancel: () => void;
};

function Groups(props: Props) {
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
          <img src={IMAGES.iclas} alt="Group Icon" />
          <div>
            {toggle ? (
              <Input
                name="groupName"
                label="Group Name"
                value={'Ojay'}
                icon={<Icon icon={editOutline} className="group-name-icon" />}
              />
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
          <InputImage
            name="Amount"
            label="Amount"
            value={'Ojay'}
            img={IMAGES.ngn}
            icon={<Icon icon={editOutline} />}
          />
        </div>

        <div className="btn-wrapper">
          <button className="btn btn-black">Edit</button>
        </div>
      </div>
    </Modal>
  );
}

export default Groups;
