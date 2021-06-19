import React from "react";
import Header from "./Header";
import SideBar from "../../../components/dashboard/SideBar";
import "../style/dashboard/style.scss";
import misc from "../../service/misc";

function Pageview (props) {
	const { title, children, isDashboard = false, ...rest } = props;
	
	return <div className="container p-0">
		<div className="page-wrapper">
			<Header title={ title } />
			<div className="row no-gutters">
				<div className="col-md-5 no-gutters">
					<div className={ "side-bar d-none d-md-block" }>
						<div>
							<SideBar />
						</div>
					</div>
				</div>
				<div className="col-md-7 no-gutters">
					<div className="main-page-wrapper"{ ...rest }>
						{ isDashboard ? (
							<div id="scroll-view" style={ { maxHeight: misc.mainContent() } }>{ children }</div>
						) : (
							<>
								<div className="page-heading d-none d-md-block">
									{ title }
								</div>
								<div className="main-page" id="scroll-view" style={ { maxHeight: misc.mainContent() - 60 } }>
									{ children }
								</div>
							</>
						) }
					</div>
				</div>
			</div>
		</div>
	</div >

}

export default Pageview;

