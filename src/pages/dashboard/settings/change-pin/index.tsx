import React from 'react';
import { Modal } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import FormControl from '../../../../components/FormControlFilled';
import Input from '../../../../components/InputFilled';
import FormHandler from './core/FormHandler';
import '../../../../style/dashboard/update-profile.scss';
import { IMAGES } from '../../../../constant';

type Props = { visible: boolean; handleCancel: () => void };
const ChangePassword = (props: Props) => {
  const { visible, handleCancel } = props;
  const {
    oldPin,
    handleOldPin,
    handleMouseDown,
    handleClick,
    newPin,
    handleNewPin,
    confirm,
    handleConfirm,
  } = FormHandler();
  return (
    <>
      <Modal title="Change Pin" footer={false} visible={visible} onCancel={handleCancel}>
        <div className="text-center mb-3">
          <Avatar src={IMAGES.goodness} size={90} alt="User Picture" />
        </div>
        <FormControl
          name="currentPin"
          id="currentPin"
          label="Current PIN"
          type={oldPin.showPin}
          value={oldPin.value}
          onChange={handleOldPin('password')}
          error={oldPin.error}
          helperText={oldPin.helperText}
          onClick={handleClick}
          onMouseDown={handleMouseDown}
        />

        <Input
          id="newPin"
          type="password"
          label="New PIN"
          name="newPin"
          value={newPin.value}
          onChange={handleNewPin}
          error={newPin.error}
          helperText={newPin.helperText}
        />

        <Input
          id="confirmPin"
          type="password"
          label="Confirm PIN"
          name="confirmPin"
          value={confirm.value}
          onChange={handleConfirm}
          error={confirm.error}
          helperText={confirm.helperText}
        />
        <div className="pl-md-4 pr-md-4 mt-4">
          <button className="btn btn-block btn-black">Save Changes</button>
        </div>
      </Modal>
    </>
  );
};

export default ChangePassword;
