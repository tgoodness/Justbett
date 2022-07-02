import { Modal } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import FormControl from '../../../../components/FormControl';
import Input from '../../../../components/Input';
import Button from '../../../../components/buttons/Button';
import formHandler from './core/FormHandler';
import { IMAGES } from '../../../../constant';
import '../../../../style/dashboard/update-profile.scss';


type Props = { visible: boolean; handleCancel: () => void };

const ChangePassword = (props: Props) => {
  const { visible, handleCancel } = props;
  const {
    currentPassword,
    handleCurrentPassword,
    handleMouseDown,
    handleClick,
    newPassword,
    handleNewPassword,
    confirm,
    handleConfirm,
  } = formHandler();

  return (
    <>
      <Modal title="Change Password" footer={false} visible={visible} onCancel={handleCancel}>
        <div className="text-center mb-3">
          <Avatar src={IMAGES.goodness} size={90} alt="User Picture" />
        </div>
        <FormControl
          name="currentPassword"
          id="currentPassword"
          label="Current Password"
          type={currentPassword.showPassword}
          value={currentPassword.value}
          onChange={handleCurrentPassword('password')}
          error={currentPassword.error}
          helperText={currentPassword.helperText}
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          
        />

        <Input
          name="newPassword"
          id="newPassword"
          label="New Password"
          type="password"
          value={newPassword.value}
          onChange={handleNewPassword}
          error={newPassword.error}
          helperText={newPassword.helperText}
        />

        <Input
          name="confirmPassword"
          id="confirmPassword"
          label="Confirm"
          type="password"
          value={confirm.value}
          onChange={handleConfirm}
          error={confirm.error}
          helperText={confirm.helperText}
        />
        <Button label="Change" className="btn btn-block btn-black mt-3" />
      </Modal>
    </>
  );
};

export default ChangePassword;
