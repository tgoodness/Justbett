import React from 'react';
import { PersonAdd } from '@material-ui/icons';
import { Icon } from '@iconify/react';
import ExitOutline from '@iconify/icons-ion/exit-outline';
import Pageview from '../../../../lib/layout/dashboard/group/Pageview';

import inviteFriendModalHandler from '../settings/invite-friends/core/ModalHandler';
import InviteFriends from '../settings/invite-friends/InviteFriends';

import exitGroupModalHandler from '../settings/exit-group/core/ModalHandler';
import ExitGroup from '../settings/exit-group/ExitGroup';

import UserPhoto from '../../../../lib/assets/avater.jfif';
import '../../../../lib/style/dashboard/group/group-information.scss';

function GroupInfo() {
  const [visibleI, showModalI, handleCancelI] = inviteFriendModalHandler();
  const [visibleE, showModalE, handleCancelE] = exitGroupModalHandler();
  const isAdmin = true;

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
          <div className="participant">
            <img src={UserPhoto} alt="Goodness" />
            <div>
              <h5>Goodness</h5>
              <h6>Osun Nigeria</h6>
            </div>
          </div>

          <div className="participant">
            <img src={UserPhoto} alt="Goodness" />
            <div>
              <h5>Goodness</h5>
              <h6>Osun Nigeria</h6>
            </div>
          </div>
          <div className="participant">
            <img src={UserPhoto} alt="Goodness" />
            <div>
              <h5>Goodness</h5>
              <h6>Osun Nigeria</h6>
            </div>
          </div>
          {isAdmin && (
            <div className="admin">
              <div className="admin-info">
                <img src={UserPhoto} alt="Goodness" />
                <div>
                  <h5>Goodness</h5>
                  <h6>Osun Nigeria</h6>
                </div>
              </div>
              <h6 className="admin-badge">
                <span>Admin</span>
              </h6>
            </div>
          )}
        </div>

        <h6 className="exit-group" onClick={showModalE}>
          <Icon icon={ExitOutline} />
          Exit group
        </h6>
      </div>

      <InviteFriends visible={visibleI} handleCancel={handleCancelI} />
      <ExitGroup visible={visibleE} handleCancel={handleCancelE} />
    </Pageview>
  );
}

export default GroupInfo;
