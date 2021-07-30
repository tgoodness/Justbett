import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {
  EditOutlined,
  PersonAddOutlined,
  HomeOutlined,
  PlayArrowOutlined,
} from '@material-ui/icons';

import inviteFriendModalHandler from '../../../../components/dashboard/group/settings/invite-friends/core/ModalHandler';
import InviteFriends from '../../../../components/dashboard/group/settings/invite-friends/InviteFriends';

import editGroupModalHandler from '../../../../components/dashboard/group/settings/edit-group/core/ModalHandler';
import EditGroup from '../../../../components/dashboard/group/settings/edit-group/EditGroup';

import exitGroupModalHandler from '../../../../components/dashboard/group/settings/exit-group/core/ModalHandler';
import ExitGroup from '../../../../components/dashboard/group/settings/exit-group/ExitGroup';

import '../style/group-menu.scss';
import { Link } from 'react-router-dom';

function MenuItems(props) {
  const { anchorEl, handleClose } = props;

  const [visibleI, showModalI, handleCancelI] = inviteFriendModalHandler(handleClose);
  const [visibleE, showModalE, handleCancelE] = editGroupModalHandler(handleClose);
  const [visibleEx, showModalEx, handleCancelEx] = exitGroupModalHandler(handleClose);

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
        <Link to="/dashboard">
          <MenuItem className="d-md-none">
            <HomeOutlined />
            Home
          </MenuItem>
        </Link>
        <Link to="/active-games">
          <MenuItem>
            <PlayArrowOutlined />
            New Bet
          </MenuItem>
        </Link>
        <MenuItem onClick={showModalI}>
          <PersonAddOutlined />
          Invite friends
        </MenuItem>

        <MenuItem onClick={showModalE}>
          <EditOutlined /> Edit Group
        </MenuItem>

        <div className="leave" onClick={showModalEx}>
          Leave
        </div>
      </Menu>

      <InviteFriends visible={visibleI} handleCancel={handleCancelI} />
      <EditGroup visible={visibleE} handleCancel={handleCancelE} />
      <ExitGroup visible={visibleEx} handleCancel={handleCancelEx} />
    </div>
  );
}
export default MenuItems;
