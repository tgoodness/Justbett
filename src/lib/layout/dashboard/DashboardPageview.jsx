import React from 'react';
import Header from './Header';
import SideBar from '../../../components/dashboard/siderbar/SideBar';
import './style/pageview.scss';
import misc from '../../service/misc';

function Pageview(props) {
	const { title, children, ...rest } = props;

	return <div className="container p-0">
		<div className="page-wrapper">
			
			<Header title={title} />

			<div className="row no-gutters">
				<div className="col-md-5 no-gutters">
					<div className={'side-bar d-none d-md-block'}>
						<div>
							<SideBar />
						</div>
					</div>
				</div>

				<div className="col-md-7 no-gutters">
					<div className="main-page-wrapper"{...rest}>
						<div
							id="scrollbar"
							style={{ maxHeight: misc.mainContent() }}>
							{children}
						</div>
					</div>
				</div>

			</div>
		</div>
	</div >;

}

export default Pageview;

