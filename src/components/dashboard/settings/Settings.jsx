import React from 'react';
import { Link } from 'react-router-dom';

import { ChevronRight, LockOutlined } from '@material-ui/icons';
import Pageview from '../../../lib/layout/dashboard/Pageview';
import { ProfileOutlined, UserOutlined, BankOutlined } from '@ant-design/icons';

import BankModalHandler from './update-bank/core/ModalHandler';
import PasswordModalHandler from './change-password/core/ModalHandler';
import PinModalHandler from './change-pin/core/ModalHandler';

import UpdateBank from './update-bank/UpdateBank';
import ChangePassword from './change-password/ChangePassword';
import ChangePin from './change-pin/ChangePin';
import '../../../lib/style/dashboard/settings.scss';

function Settings () {

	const [ openBank, showBank, closeBank ] = BankModalHandler();
	const [ openPassword, showPassword, closePassword ] = PasswordModalHandler();
	const [ openPin, showPin, closePin ] = PinModalHandler();

	return (
		<Pageview title="Settings">
			<div className="settings">
				<Link to="/profile">
					<div className="control" >
						<h6 >
							<span className="profile-icon"><UserOutlined /></span>
							<span>Update Profile</span>
						</h6>
						<ChevronRight />
					</div>
				</Link>
				<div className="control" onClick={ showBank }>
					<h6>
						<span className="bank-icon"><BankOutlined /></span>
						<span>Update Bank</span>
					</h6>
					<ChevronRight />
				</div>

				<div className="control" onClick={ showPassword }>
					<h6>
						<span className="lock-icon"><LockOutlined /></span>
						<span>Change Password</span>
					</h6>
					<ChevronRight />
				</div>

				<div className="control" onClick={ showPin }>
					<h6>
						<span className="pin-icon" ><ProfileOutlined /></span>
						<span>Change Pin</span>
					</h6>
					<ChevronRight />
				</div>
			</div>



			<UpdateBank open={ openBank } handleClose={ closeBank } />
			<ChangePassword open={ openPassword } handleClose={ closePassword } />
			<ChangePin open={ openPin } handleClose={ closePin } />

		</Pageview>
	);
}

export default Settings;
