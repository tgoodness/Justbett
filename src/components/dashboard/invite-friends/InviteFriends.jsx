import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Pageview from '../../../lib/layout/dashboard/Pageview';
import Alert from '../../../lib/control/Alert';
import logicHandler from './core/LogicHandler';
import '../../../lib/style/dashboard/invite-friends.scss';


function Withdraw() {
     const [inviteLink, open, handleCopy, handleClose] = logicHandler();
	return (
		<Pageview title="Invite Friends" data-aos="flip-left">
			<div className="wrapper">
				<img
					src={`https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${'Goodness'}`}
					alt="qrcode"
					width="130"
					className="qrcode img-fluid"
				/>
				<div>www.justbett.com/register/JB8303</div>
				<CopyToClipboard text={inviteLink} onCopy={handleCopy}>
					<button className="btn btn-black  btn-block">Copy & Share</button>
				</CopyToClipboard>
			</div>
			<Alert open={open} msg="Copied" onClose={handleClose} />
		</Pageview>
	);
}

export default Withdraw;
