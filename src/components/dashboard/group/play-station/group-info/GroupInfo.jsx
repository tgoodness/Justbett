import React from 'react';
import { PersonAdd } from '@material-ui/icons';
import { Icon } from '@iconify/react';
import ExitOutline from '@iconify/icons-ion/exit-outline';
import Pageview from '../../../../../lib/layout/dashboard/group/Pageview';

import inviteFriendModalHandler from '../../settings/invite-friends/core/ModalHandler';
import InviteFriends from '../../settings/invite-friends/InviteFriends';

import exitGroupModalHandler from '../../settings/exit-group/core/ModalHandler';
import ExitGroup from '../../settings/exit-group/ExitGroup';

import managementModalHandler from '../../settings/management/core/ModalHandler';
import GroupManagement from '../../settings/management/Management';

import UserPhoto from '../../../../../lib/assets/avater.jfif';
import '../../../../../lib/style/dashboard/group/group-information.scss';

function GroupInfo() {
  const [visibleI, showModalI, handleCancelI] = inviteFriendModalHandler();
  const [visibleE, showModalE, handleCancelE] = exitGroupModalHandler();
  const [visibleM, showModalM, handleCancelM] = managementModalHandler();

  const users = [
    { username: 'Goodness', address: 'Osun Nigeria', photo: UserPhoto, isAdmin: false },
    { username: 'Raphael', address: 'Oyo Nigeria', photo: UserPhoto, isAdmin: false },
    { username: 'Stephen', address: 'Lagos Nigeria', photo: UserPhoto, isAdmin: true },
  ];

  return (
    <Pageview participants={false}>
      <div className="group-information">
        <div className="participants">
          <h6>3 Participants</h6>
          <h5 onClick={showModalI}>
            <PersonAdd /> Add participants
          </h5>
        </div>

        <div className="participants-wrapper">
          {users.map((item) => {
            return item.isAdmin ? (
              <div className="admin" onClick={showModalM}>
                <div className="admin-info">
                  <img src={UserPhoto} alt="Goodness" />
                  <div>
                    <h5>{item.username}</h5>
                    <h6>{item.address}</h6>
                  </div>
                </div>
                <h6 className="admin-badge">
                  <span>Admin</span>
                </h6>
              </div>
            ) : (
              <div className="participant" onClick={showModalM}>
                <img src={UserPhoto} alt="Goodness" />
                <div>
                  <h5>{item.username}</h5>
                  <h6>{item.address}</h6>
                </div>
              </div>
            );
          })}
        </div>

        <h6 className="exit-group" onClick={showModalE}>
          <Icon icon={ExitOutline} />
          Exit group
        </h6>
      </div>

      <InviteFriends visible={visibleI} handleCancel={handleCancelI} />
      <ExitGroup visible={visibleE} handleCancel={handleCancelE} />
      <GroupManagement visible={visibleM} handleCancel={handleCancelM} />
    </Pageview>
  );
}

export default GroupInfo;
