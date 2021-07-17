import React from 'react';
import Pageview from '../../../lib/layout/dashboard/Pageview';
import InputImage from '../../../lib/control/InputImage';
import Input from '../../../lib/control/InputFilled';
import '../../../lib/style/dashboard/withdraw.scss';
import NGN from '../../../lib/assets/dashboard/ngn.png';

function Withdraw () {

	return (
		<Pageview title="Withdraw" data-aos="flip-left">
			<div className="withdraw">
				<div className="existing-details">
					<div className="bank-details">
						<h5>TOBILOBA AKINYEMI O.</h5>
						<h6>3030034509 </h6>
						<h6>POLARIS BANK</h6>
					</div>

					<div className="account-balance">
						<img src={ NGN } alt="Nigeria Logo" />
						<div>
							<h5>24,000.00</h5>
							<h6>Acct. Balance</h6>
						</div>
					</div>
				</div>

				<InputImage label="Amount" icon={ NGN } />
				<Input label="Pin" />

				<div className="mt-4">
					<button className="btn btn-black  btn-block">Withdraw</button>
				</div>
			</div>
		</Pageview>
	);
}

export default Withdraw;
