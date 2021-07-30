import React from 'react';
import Header from './Header';
import MobileHeader from './MobileHeader';
import SideBar from '../../../../components/dashboard/siderbar/SideBar';
import useWindowSize from '../../../service/UseWindowSize';
import PageTitle from './PageTitle';
import misc from '../../../service/misc';
import '../style/pageview.scss';

function Pageview(props) {
	const { title, participants = true, children, ...rest } = props;
	const [width] = useWindowSize();

	return <div className="container p-0">
		<div className="page-wrapper">
			{width > 767 ? <Header title={title} /> : <MobileHeader participants={participants} />}

			<div className="row no-gutters">
				<div className="col-md-5 no-gutters">
					<div className="side-bar d-none d-md-block">
						<div>
							<SideBar />
						</div>
					</div>
				</div>

				
				<div className="col-md-7 no-gutters">
					<div className="main-page-wrapper"{...rest}>
						<PageTitle participants={participants}/>
						<div
							id="scrollbar"
							style={{ maxHeight: misc.mainContent() - 60 }}>
							{children}
						</div>

					</div>
				</div>

			</div>
		</div>
	</div >;

}

export default Pageview;

