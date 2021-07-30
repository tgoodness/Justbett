import React from 'react';
import { Icon } from '@iconify/react';
import editOutline from '@iconify/icons-eva/edit-outline';

import editFriendModalHandler from '../../settings/edit-team/core/ModalHandler';
import EditTeam from '../../settings/edit-team/EditTeam';

import CHE from '../../../../../lib/assets/clubes/CHE.png';
import MAN from '../../../../../lib/assets/clubes/MAN.png';
import Button from '../../../../../lib/control/Button';

function Ready() {
  const [visible, showModal, handleCancel] = editFriendModalHandler();

  return (
    <div className="ready-wrapper">
      <h5>READY (1/5)</h5>
      <h6>Do you want to continue ?</h6>

      <div className="teams">
        <div className={'team-name'}>
          <img src={CHE} alt="TeamA Logo" width="25" height="25" />
          <span>CHE</span>
        </div>
        <span className="ml-1 mr-1 separator">-</span>
        <div className={'team-name'}>
          <img src={MAN} alt="TeamB Logo" width="25" height="25" />
          <span>MAN</span> <Icon icon={editOutline} onClick={showModal} />
        </div>
      </div>

      <div className="btn__group">
        <Button className="btn btn-black" label="No(20s)" />
        <Button className="btn btn-warning" label="Yes" />
      </div>

      <EditTeam visible={visible} handleCancel={handleCancel} />
    </div>
  );
}

export default Ready;
