import React from "react";
import { Modal } from "antd";

import InputImage from "../../lib/control/InputImage";
import Input from "../../lib/control/InputFilled";
import SelectBank from "../../lib/control/SelectBank";

const UpdateBankDetails = (props) => {
	const { open, handleClose } = props;
	const banks = [
		{ bankName: "FCMB", bankCode: 124 },
		{ bankName: "WEMA", bankCode: 125 },
		{ bankName: "Polaris", bankCode: 126 },
	];

	return (
		<>
			<Modal
				title="Bank Details"
				footer={false}
				visible={open}
				onCancel={handleClose}>
				<SelectBank items={banks} />
				<Input label="Account Number" />
				<Input label="Account Name" />
				<Input label="Enter Your Pin" />
				<div className="pl-md-4 pr-md-4 mt-4">
					<button className="btn btn-block btn-black">Save Changes</button>
				</div>
			</Modal>
		</>
	);
};

export default UpdateBankDetails;
