import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { Badge } from "@material-ui/core";
import "../style/dashboard/style.scss";
 function MenuItems(props) {
  const { anchorEl, handleClose } = props;

  return (
		<div>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
				className="menu-items">
				<Link to="/dashboard">
					<MenuItem>Dashboard</MenuItem>
				</Link>
				<Link to="/pending-games">
					<MenuItem className="pending-game-badge">
						<span>Pending</span> <Badge badgeContent={5} color="secondary" />
					</MenuItem>
				</Link>
				<Link to="/game-history">
					<MenuItem>Game History</MenuItem>
				</Link>

				<Link to="/withdraw">
					<MenuItem>Withdraw</MenuItem>
				</Link>
				<Link to="/settings">
					<MenuItem>Setting</MenuItem>
				</Link>
				<Link to="/invite-friends">
					<MenuItem>Invite Friends</MenuItem>
				</Link>
				<Link to="/">
					<MenuItem>Support</MenuItem>
				</Link>
			</Menu>
		</div>
	);
}
export default MenuItems