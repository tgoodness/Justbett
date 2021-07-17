import React from 'react';
import { Modal } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import FormControl from '../../../../lib/control/FormControlFilled';
import Input from '../../../../lib/control/InputFilled';
import FormHandler from './core/FormHandler';
import '../../../../lib/style/dashboard/update-profile.scss';
import Goodness from '../../../../lib/assets/avater.jfif';

const ChangePassword = (props) => {
	const { open, handleClose } = props;
	const [
		oldPassword,
		handleOldPassword,
		handleMouseDown,
		handleClick,
		newPassword,
		handleNewPassword,
		confirm,
		handleConfirm,
	] = FormHandler();

	return (
		<>
			<Modal
				title="Change Password"
				footer={ false }
				visible={ open }
				onCancel={ handleClose }>

				<div className="text-center mb-3">
					<Avatar src={ Goodness } size={ 90 } alt="User Picture" />
				</div>
				<FormControl
					label="Old Password"
					type={ oldPassword.showPassword }
					value={ oldPassword.password }
					onChange={ handleOldPassword('password') }
					error={ oldPassword.error }
					helperText={ oldPassword.helperText }
					onClick={ handleClick }
					onMouseDown={ handleMouseDown }
				/>

				<Input
					label="New Password"
					type="password"
					value={ newPassword.value }
					onChange={ handleNewPassword }
					error={ newPassword.error }
					helperText={ newPassword.helperText }
				/>

				<Input
					label="Confirm"
					type="password"
					value={ confirm.value }
					onChange={ handleConfirm }
					error={ confirm.error }
					helperText={ confirm.helperText }
				/>
				<div className="pl-md-4 pr-md-4 mt-4">
					<button className="btn btn-block btn-black">Save Changes</button>
				</div>
			</Modal>
		</>
	);
};

export default ChangePassword;
