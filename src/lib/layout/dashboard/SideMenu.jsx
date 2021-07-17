import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import {
	DashboardOutlined, PlayArrowOutlined, MoreHorizOutlined,
	ListAltOutlined, ScheduleOutlined, LocalMallOutlined, HelpOutline
} from '@material-ui/icons';

import useWindowSize from '../../service/UseWindowSize';
import './style/side-menu.scss';
import NGN from '../../assets/dashboard/ngn.png';

function MenuItems (props) {
	const { anchorEl, handleClose } = props;
	//Switch viewport
	const [ width ] = useWindowSize();
	return (
		<div>
			<Menu
				id="simple-menu"
				anchorEl={ anchorEl }
				keepMounted
				open={ Boolean(anchorEl) }
				onClose={ handleClose }
				className="side-menu">
				<div className="country-logo-wrapper">
					<img src={ NGN } alt="Country Logo" />
					<span>Justbet</span>
				</div>
				<Link to="/dashboard">
					<MenuItem><DashboardOutlined /> Dashboard</MenuItem>
				</Link>
				{ width <= 767 &&
					<Link to="/active-games">
						<MenuItem><PlayArrowOutlined /> Place Bet</MenuItem>
					</Link>
				}
				<Link to="/pending-games">
					<MenuItem className="pending-game-badge">
						<span> <MoreHorizOutlined />Pending</span>
						<Badge badgeContent={ 5 } color="secondary" />
						<span></span>
					</MenuItem>
				</Link>
				<Link to="/game-history">
					<MenuItem><ScheduleOutlined />Game History</MenuItem>
				</Link>

				<Link to="/activities">
					<MenuItem><ListAltOutlined />Activities</MenuItem>
				</Link>

				<Link to="/withdraw">
					<MenuItem><LocalMallOutlined /> Withdraw</MenuItem>
				</Link>

				<Link to="/">
					<MenuItem><HelpOutline /> Support</MenuItem>
				</Link>
			</Menu>
		</div>
	);
}
export default MenuItems;