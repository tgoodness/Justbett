import { PersonAdd } from '@material-ui/icons';
import { Icon } from '@iconify/react';
import ExitOutline from '@iconify/icons-ion/exit-outline';
import Pageview from '../../../../../core-ui/dashboard/group/Pageview';

import inviteFriendModalHandler from '../../../../../hooks/useModalHandler';
import InviteFriends from '../../settings/invite-friends';

import exitGroupModalHandler from '../../../../../hooks/useModalHandler';
import ExitGroup from '../../settings/exit-group';

import managementModalHandler from '../../../../../hooks/useModalHandler';
import GroupManagement from '../../settings/management';
import '../../../../../style/dashboard/group/group-information.scss';
import { IMAGES } from '../../../../../constant';

function GroupInfo() {
  const {
    visible: visibleI,
    showModal: showModalI,
    handleCancel: handleCancelI,
  } = inviteFriendModalHandler();
  const {
    visible: visibleE,
    showModal: showModalE,
    handleCancel: handleCancelE,
  } = exitGroupModalHandler();
  const {
    visible: visibleM,
    showModal: showModalM,
    handleCancel: handleCancelM,
  } = managementModalHandler();

  const users = [
    { username: 'Goodness', address: 'Osun Nigeria', photo: IMAGES.goodness, isAdmin: false },
    { username: 'Raphael', address: 'Oyo Nigeria', photo: IMAGES.goodness, isAdmin: false },
    { username: 'Stephen', address: 'Lagos Nigeria', photo: IMAGES.goodness, isAdmin: true },
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
                  <img src={IMAGES.goodness} alt="Goodness" />
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
                <img src={IMAGES.goodness} alt="Goodness" />
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
