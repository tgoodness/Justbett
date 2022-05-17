import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { PopoverProps } from '@material-ui/core';

import {
  EditOutlined,
  PersonAddOutlined,
  AccountBalanceWalletOutlined,
  PeopleAltOutlined,
} from '@material-ui/icons';

import inviteFriendModalHandler from '../../../hooks/useModalWithParams';
import InviteFriends from '../../../pages/dashboard/group/settings/invite-friends';

import editGroupModalHandler from '../../../hooks/useModalWithParams';
import EditGroup from '../../../pages/dashboard/group/settings/edit-group/EditGroup';

import exitGroupModalHandler from '../../../hooks/useModalWithParams';
import ExitGroup from '../../../pages/dashboard/group/settings/exit-group';

import groupsModalHandler from '../../../hooks/useModalWithParams';
import Groups from '../../../pages/dashboard/group/settings/groups';

import '../style/group-menu.scss';
import { Link } from 'react-router-dom';

type Props = {
  anchorEl: PopoverProps['anchorEl'];
  handleClose: any
};

const MenuItems = (props: Props) => {
  const { anchorEl, handleClose } = props;

  const {
    visible: visibleI,
    showModal: showModalI,
    handleCancel: handleCancelI,
  } = inviteFriendModalHandler(handleClose);

  const {
    visible: visibleE,
    showModal: showModalE,
    handleCancel: handleCancelE,
  } = editGroupModalHandler(handleClose);

  const {
    visible: visibleEx,
    showModal: showModalEx,
    handleCancel: handleCancelEx,
  } = exitGroupModalHandler(handleClose);

  const {
    visible: visibleG,
    showModal: showModalG,
    handleCancel: handleCancelG,
  } = groupsModalHandler(handleClose);

  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="group-menu"
      >
        <MenuItem onClick={showModalI}>
          <PersonAddOutlined />
          Invite friends
        </MenuItem>

        <MenuItem onClick={showModalE}>
          <EditOutlined /> Edit Group
        </MenuItem>

        <Link to="/wallet">
          <MenuItem>
            <AccountBalanceWalletOutlined />
            My Wallet
          </MenuItem>
        </Link>
        <Link to="#">
          <MenuItem onClick={showModalG}>
            <PeopleAltOutlined /> Groups
          </MenuItem>
        </Link>
        <div className="leave" onClick={showModalEx}>
          Leave
        </div>
      </Menu>

      <InviteFriends visible={visibleI} handleCancel={handleCancelI} />
      <EditGroup visible={visibleE} handleCancel={handleCancelE} />
      <ExitGroup visible={visibleEx} handleCancel={handleCancelEx} />
      <Groups visible={visibleG} handleCancel={handleCancelG} />
    </div>
  );
};
export default MenuItems;
