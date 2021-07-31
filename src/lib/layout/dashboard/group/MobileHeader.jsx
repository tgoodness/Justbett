import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { MenuOutlined, MoreHorizOutlined } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

import GroupMenu from '../group/GroupMenu';
import SideMenu from '../SideMenu';
import Diamond from '../../../assets/stones/diamond.png';
import '../style/header.scss';

function Header(props) {
  const { participants } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElG, setAnchorElG] = useState(null);
  const handleClickG = (event) => {
    setAnchorElG(event.currentTarget);
  };

  const handleCloseG = () => {
    setAnchorElG(null);
  };


  return (
    <div>
      <AppBar position="static" className="appbar">
        <div className="group-page-title-wrapper">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
              <MenuOutlined />
            </IconButton>
            <Avatar src={Diamond} alt="User Avater" className="Group Icon" />

            <Typography variant="h6" className="page-title">
              <Link to="/group-info">
                <h5>JustBett</h5>
                {participants && <h6>Goodness, Abbey ...</h6>}
              </Link>
            </Typography>

            <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleClickG}>
              <MoreHorizOutlined className="more-icon" />
            </IconButton>
          </Toolbar>
        </div>
      </AppBar>

      <GroupMenu anchorEl={anchorElG} handleClose={handleCloseG} />
      <SideMenu anchorEl={anchorEl} handleClose={handleClose} />
    </div>
  );
}

export default Header;
