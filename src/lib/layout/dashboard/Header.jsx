import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar } from "@material-ui/core";
import MenuItems from "./MenuItems";

import userImage from "../../assets/avater.jfif";
import "../style/dashboard/header.scss";


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
}));

function Header({ title }) {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static" className="appbar">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={handleClick}>
						<MenuIcon className="menu-icon" />
					</IconButton>
					<Typography variant="h6" className="page-title">
						<span className="d-none d-md-block">JustBett</span>
						<span className="d-md-none">{title}</span>
					</Typography>
					<Avatar>
						<img src={userImage} alt="User Image" className="img-fluid" />
					</Avatar>
				</Toolbar>
			</AppBar>
			<MenuItems anchorEl={anchorEl} handleClose={handleClose} />
		</div>
	);
}

export default Header;
