import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { PopoverProps } from '@material-ui/core';

import {
  PeopleAltOutlined,
  AccountBalanceWalletOutlined,
  SettingsOutlined,
} from '@material-ui/icons';

import modalHandler from '../../hooks/useModalWithParams';
import Groups from '../../pages/dashboard/group/settings/groups';
import { IMAGES } from '../../constant';
import './style/account-menu.scss';

type Props = {
  anchorEl: PopoverProps['anchorEl'];
  handleClose: any;
};

const MenuItems = (props: Props) => {
  const { anchorEl, handleClose } = props;
  const { visible, showModal, handleCancel } = modalHandler(handleClose);

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
              <img src={IMAGES.goodness} alt="UserPhoto" />
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
        <Link to="/add-money">
          <MenuItem>
            <AccountBalanceWalletOutlined />
            Add Money
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
};
export default MenuItems;
