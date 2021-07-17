import React from 'react';
import { Empty } from 'antd';
import { Link } from 'react-router-dom';

import {
	PlusSquareOutlined,
	BankOutlined,
	ShoppingOutlined,
	RightOutlined,
} from '@ant-design/icons';

import Pageview from '../../../lib/layout/dashboard/Pageview';
import util from '../../../lib/service/utils';

import '../../../lib/style/dashboard/dashboard.scss';
import NGN from '../../../lib/assets/dashboard/ngn.png';


function Dashboard () {
	const activities = [
		{
			type: 'DEPOSIT',
			amount: 500.0,
			date: '05-05-20',
			icon: <BankOutlined />,
		},

		{
			type: 'WITHDRAW',
			amount: 100.0,
			date: '05-03-20',
			icon: <ShoppingOutlined />,
		},

		{
			type: 'CREDIT',
			amount: 500.0,
			date: '05-05-20',
			icon: <PlusSquareOutlined />,
		},
	];
	return (
		<Pageview title="Dashboard">
			<div className="dashboard">
				<div className="wallet-wrapper">
					<div className="balance-wrapper">
						<img src={ NGN } alt="Nigeria Logo" width="50" height="40" />
						<div>
							<h5>24,000.00</h5>
							<h6>Available Balance</h6>
						</div>
					</div>
					<div className="account-details-wrapper">
						<div className="account">
							<h3>225 382 6323</h3>
							<h5>Akinyemi Tobiloba</h5>
						</div>
						<div className="withdraw">
							<h6>WEMA</h6>
							<h6>
								<Link to="/withdraw">
									<span>Withdraw</span>
								</Link>
							</h6>
						</div>
					</div>
				</div>

				<div className="activities">
					<div className="activities-header">
						<h5>Activities</h5>
						<h6>
							<Link to="/withdraw"><RightOutlined /></Link>
						</h6>
					</div>

					{ activities.length === 0 ? (
						<Empty image={ Empty.PRESENTED_IMAGE_SIMPLE } />
					) : (
						activities.map((item) => {
							return (
								<div className="activity" key={ util.randomNumber + item.type }>
									<div className="icon-wrapper">
										{ item.icon }
										<div>
											<h5>{ item.type }</h5>
											<h6>{ item.date }</h6>
										</div>
									</div>
									<h6>N{ item.amount }</h6>
								</div>
							);
						})
					) }
				</div>
			</div>
		</Pageview>
	);
}

export default Dashboard;
