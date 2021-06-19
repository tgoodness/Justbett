import React from "react";
import { Modal, DatePicker } from "antd";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import SelectCountry from "../../lib/control/SelectCountry";
import Select from "../../lib/control/Select";
import Input from "../../lib/control/InputFilled";
import NGN from "../../lib/assets/dashboard/ngn.png";
import FormHandler from "../../lib/core/dashboard/settings/update-profile/FormHandler";
import "../../lib/style/dashboard/update-profile.scss";
const UpdateProfile = (props) => {
	const { open, handleClose } = props;
	const countries = [{ name: "Nigeria", icon: NGN }];
	const [
		country,
		handleCountry,
		city,
		handleCity,
		mobile,
		handleMobile,
		gender,
		handleGender,
		dob,
		handleDob,
	] = FormHandler();

	return (
		<>
			<Modal
				title="Profile Details"
				footer={false}
				visible={open}
				onCancel={handleClose}>
				<SelectCountry
					items={countries}
					value={country}
					onChange={handleCountry}
				/>
				<Select
					label="State"
					items={[0, 2]}
					value={city}
					onChange={handleCity}
				/>
				<Input
					label="Mobile"
					type="number"
					value={mobile}
					onChange={handleMobile}
				/>

				<div className="gender-wrapper">
					<RadioGroup
						row
						aria-label="gender"
						name="gender"
						value={gender}
						onChange={handleGender}>
						<FormControlLabel
							value="male"
							control={<Radio />}
							label="Male"
							labelPlacement="end"
						/>
						<FormControlLabel
							value="female"
							control={<Radio />}
							label="Female"
							labelPlacement="end"
						/>
					</RadioGroup>
				</div>
				<div className="dob-wrapper">
					<DatePicker onChange={handleDob} />
				</div>
				<div className="pl-md-4 pr-md-4 mt-4">
					<button className="btn btn-block btn-black">Save Changes</button>
				</div>
			</Modal>
		</>
	);
};

export default UpdateProfile;
