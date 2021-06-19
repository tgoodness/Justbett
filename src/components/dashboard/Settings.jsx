import React from "react";
import { ChevronRight, LockOutlined } from "@material-ui/icons";
import Pageview from "../../lib/layout/dashboard/Pageview";
import { ProfileOutlined, UserOutlined, BankOutlined } from "@ant-design/icons";

import ProfileModalHandler from "../../lib/core/dashboard/settings/update-profile/ModalHandler";
import BankModalHandler from "../../lib/core/dashboard/settings/update-bank/ModalHandler";
import PasswordModalHandler from "../../lib/core/dashboard/settings/change-password/ModalHandler";
import PinModalHandler from "../../lib/core/dashboard/settings/change-pin/ModalHandler";

import UpdateProfile from "./UpdateProfile";
import UpdateBank from "./UpdateBank";
import ChangePassword from "./ChangePassword";
import ChangePin from "./ChangePin";
import "../../lib/style/dashboard/settings.scss";

function Settings() {
	const [openUpdate, showUpdate, closeUpdate] = ProfileModalHandler();
	const [openBank, showBank, closeBank] = BankModalHandler();
	const [openPassword, showPassword, closePassword] = PasswordModalHandler();
	const [openPin, showPin, closePin] = PinModalHandler();
	return (
		<Pageview title="Settings" data-aos="flip-left">
			<div className="control-wrapper">
				<div className="control" onClick={showUpdate}>
					<span>
						<UserOutlined /> Update Profile
					</span>
					<ChevronRight />
				</div>
				<div className="control" onClick={showBank}>
					<span>
						<BankOutlined />
						Update Bank
					</span>

					<ChevronRight />
				</div>
				<div className="control" onClick={showPassword}>
					<span>
						<LockOutlined />
						Change Password
					</span>

					<ChevronRight />
				</div>
				<div className="control" onClick={showPin}>
					<span>
						<ProfileOutlined /> Change Pin
					</span>
					<ChevronRight />
				</div>
			</div>

			{/* modals */}
			<UpdateProfile open={openUpdate} handleClose={closeUpdate} />
			<UpdateBank open={openBank} handleClose={closeBank} />
			<ChangePassword open={openPassword} handleClose={closePassword} />
			<ChangePin open={openPin} handleClose={closePin} />
		</Pageview>
	);
}

export default Settings;
