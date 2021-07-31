import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar } from '@material-ui/core';
import SideMenu from './SideMenu';
import AccountMenu from './AccountMenu';
import './style/header.scss';

import UserPhoto from '../../assets/avater.jfif';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(0),
	},
}));

function Header ({ title }) {
	const classes = useStyles();

	const [ anchorEl, setAnchorEl ] = useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};


	const [ anchorElA, setAnchorElA ] = useState(null);
	const handleClickA = (event) => {
		setAnchorElA(event.currentTarget);
	};
	const handleCloseA = () => {
		setAnchorElA(null);
	};

	return (
		<div className={ classes.root }>
			<AppBar position="static" className="appbar">
				<Toolbar>
					<IconButton
						edge="start"
						className={ classes.menuButton }
						color="inherit"
						aria-label="menu"
						onClick={ handleClick }>
						<MenuIcon className="menu-icon"  />
					</IconButton>
					<Typography variant="h6" className="page-title">
						<span className="d-none d-md-block">JustBett</span>
						<span className="d-md-none">{ title }</span>
					</Typography>
					<Avatar onClick={ handleClickA }>
						<img src={ UserPhoto } alt="User Avater" className="img-fluid user-photo" />
					</Avatar>
				</Toolbar>
			</AppBar>
			<SideMenu anchorEl={ anchorEl } handleClose={ handleClose } />
			<AccountMenu anchorEl={ anchorElA } handleClose={ handleCloseA } />
		</div>
	);
}

export default Header;
