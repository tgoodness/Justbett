import React from 'react';
import Button from '../../../../../lib/control/Button';
import '../../../../../lib/style/dashboard/group/join-group.scss';

function JoinGroup() {
  return (
    <div className="join-group">
      <div className="join-group-card">
        <h6>Do you want to join this group?</h6>

        <div className="btn__group">
          <Button className="btn btn-black" label="No" />
          <Button className="btn btn-warning" label="Yes" />
        </div>
      </div>
    </div>
  );
}

export default JoinGroup;
