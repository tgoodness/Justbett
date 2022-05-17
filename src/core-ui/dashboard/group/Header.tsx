import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar } from '@material-ui/core';
import SideMenu from '../SideMenu';
import AccountMenu from '../AccountMenu';
import { IMAGES } from '../../../constant';
import '../style/header.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

type Props = {
  title: string;
};

const Header = (props: Props): JSX.Element => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElA, setAnchorElA] = useState(null);
  const handleClickA = (e: any) => {
    setAnchorElA(e.currentTarget);
  };
  const handleCloseA = () => {
    setAnchorElA(null);
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
            onClick={handleClick}
          >
            <MenuIcon className="menu-icon" />
          </IconButton>

          <Typography variant="h6" className="page-title">
            <span className="d-none d-md-block">JustBett</span>
            <span className="d-md-none">{props.title}</span>
          </Typography>

          <Avatar onClick={handleClickA}>
            <img src={IMAGES.goodness} alt="User Avater" className="img-fluid" />
          </Avatar>
        </Toolbar>
      </AppBar>
      <SideMenu anchorEl={anchorEl} handleClose={handleClose} />
      <AccountMenu anchorEl={anchorElA} handleClose={handleCloseA} />
    </div>
  );
};

export default Header;
