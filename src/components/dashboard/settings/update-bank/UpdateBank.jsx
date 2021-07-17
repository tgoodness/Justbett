import React from 'react';
import { Modal } from 'antd';
import Input from '../../../../lib/control/InputFilled';
import SelectBank from '../../../../lib/control/SelectBank';
import '../../../../lib/style/dashboard/update-bank.scss';
function UpdateBank (props) {
	const { open, handleClose } = props;
	const banks = [
		{ bankName: 'FCMB', bankCode: 124 },
		{ bankName: 'WEMA', bankCode: 125 },
		{ bankName: 'Polaris', bankCode: 126 },
	];

	return (
		<>
			<Modal
				title="Bank Details"
				footer={ false }
				visible={ open }
				onCancel={ handleClose }>
				<div className="update-bank">
					<div className="existing-details">
						<h5>TOBILOBA AKINYEMI O.</h5>
						<div>
							<h6>3030034509</h6>
							<h6>POLARIS BANK</h6>
						</div>
					</div>

					<SelectBank items={ banks } />
					<Input label="Account Number" />
					<Input label="Account Name" />
					<Input label="Enter Your Pin" />
					<div className="pl-md-4 pr-md-4 mt-4">
						<button className="btn btn-block btn-black">Save Changes</button>
					</div>
				</div>
			</Modal>
		</>
	);
}

export default UpdateBank;
