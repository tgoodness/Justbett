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
		oldPin,
		handleOldPin,
		handleMouseDown,
		handleClick,
		newPin,
		handleNewPin,
		confirm,
		handleConfirm,
	] = FormHandler();
	return (
		<>
			<Modal
				title="Change Pin"
				footer={false}
				visible={open}
				onCancel={ handleClose }>
				<div className="text-center mb-3">
					<Avatar src={ Goodness } size={ 90 } alt="User Picture" />
				</div>
				<FormControl
					label="Old Pin"
					type={oldPin.showPin}
					value={oldPin.value}
					onChange={handleOldPin('password')}
					error={oldPin.error}
					helperText={oldPin.helperText}
					onClick={handleClick}
					onMouseDown={handleMouseDown}
				/>

				<Input
					type="password"
					label="New Pin"
					name="newPin"
					value={newPin.value}
					onChange={handleNewPin}
					error={newPin.error}
					helperText={newPin.helperText}
				/>

				<Input
					type="password"
					label="Confirm"
					name="confirm"
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