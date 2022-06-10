import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

import {
  DashboardOutlined,
  PlayArrowOutlined,
  ScheduleOutlined,
  LocalMallOutlined,
  HelpOutline,
} from '@material-ui/icons';
import { PopoverProps } from '@material-ui/core';

import useWindowSize from '../../helpers/UseWindowSize';
import { IMAGES } from '../../constant';
import './style/side-menu.scss';

type Props = {
  anchorEl: PopoverProps['anchorEl'];
  handleClose: any;
};

const MenuItems = (props: Props): JSX.Element => {
  const { anchorEl, handleClose } = props;
  //Switch viewport
  const [width] = useWindowSize();
  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="side-menu"
      >
        <div className="country-logo-wrapper">
          <img src={IMAGES.ngn} alt="Country Logo" />
          <span>Justbet</span>
        </div>
        <Link to="/dashboard">
          <MenuItem>
            <DashboardOutlined /> Dashboard
          </MenuItem>
        </Link>
        {width <= 767 && (
          <Link to="/active-games">
            <MenuItem>
              <PlayArrowOutlined /> Place Bet
            </MenuItem>
          </Link>
        )}
       
        <Link to="/game-history">
          <MenuItem>
            <ScheduleOutlined />
            Game History
          </MenuItem>
        </Link>

        <Link to="/withdraw">
          <MenuItem>
            <LocalMallOutlined /> Withdraw
          </MenuItem>
        </Link>

        <Link to="/support">
          <MenuItem>
            <HelpOutline /> Support
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};
export default MenuItems;
