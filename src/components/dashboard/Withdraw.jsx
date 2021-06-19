import React from "react";
import Pageview from "../../lib/layout/dashboard/Pageview";
import InputImage from "../../lib/control/InputImage";
import Input from "../../lib/control/InputFilled";
import SelectBank from "../../lib/control/SelectBank";
import "../../lib/style/dashboard/withdraw.scss";
import NGN from "../../lib/assets/dashboard/ngn.png";

function Withdraw() {
	const banks = [
		{ bankName: "FCMB", bankCode: 124 },
		{ bankName: "WEMA", bankCode: 125 },
		{ bankName: "Polaris", bankCode: 126 },
	];
	return (
		<Pageview title="Game Details" data-aos="flip-left">
			<div className="form-wrapper">
				<InputImage label="Amount" icon={NGN} />
				<SelectBank items={banks} />
				<Input label="Account Number" />
				<Input label="Account Name" />

				<div className="mt-4">
					<button className="btn btn-black  btn-block">Withdraw</button>
				</div>
			</div>
		</Pageview>
	);
}

export default Withdraw;
