import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import {
  PeopleAltOutlined,
  AccountBalanceWalletOutlined,
  SettingsOutlined,
} from '@material-ui/icons';

import modalHandler from '../../../components/dashboard/group/settings/groups/core/ModalHandler';
import Groups from '../../../components/dashboard/group/settings/groups/Groups';

import './style/account-menu.scss';
import UserPhoto from '../../assets/avater.jfif';

function MenuItems(props) {
  const { anchorEl, handleClose } = props;
	const [visible, showModal, handleCancel] = modalHandler(handleClose);
	
  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="account-menu"
      >
        <Link to="/profile">
          <MenuItem>
            <div className="profile-wrapper">
              <img src={UserPhoto} alt="Country Logo" />
              <div>
                <h5>TeeGoodness</h5>
                <h6>See your profile</h6>
              </div>
            </div>
          </MenuItem>
        </Link>

        <Link to="#">
          <MenuItem onClick={showModal}>
            <PeopleAltOutlined /> Groups
          </MenuItem>
        </Link>
        <Link to="/wallet">
          <MenuItem>
            <AccountBalanceWalletOutlined />
            My Wallet
          </MenuItem>
        </Link>

        <Link to="/settings">
          <MenuItem>
            <SettingsOutlined />
            Settings
          </MenuItem>
        </Link>

        <div className="logout">Log Out</div>
      </Menu>

      <Groups visible={visible} handleCancel={handleCancel} />
    </div>
  );
}
export default MenuItems;
