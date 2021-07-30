import React from 'react';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';

import { LensOutlined } from '@material-ui/icons';
import GroupIcon from '../../../../../lib/assets/stones/iclas.png';
import '../../../../../lib/style/dashboard/group/groups.scss';
function Groups(props) {
  const { visible, handleCancel } = props;
  return (
    <Modal visible={visible} onCancel={handleCancel} title="Groups" footer={false} centered={true}>
      <div className="groups">
        <Link to="/group/play-station/1">
          <div className="group">
            <div className="group-info">
              <img src={GroupIcon} alt="Group Icon" />
              <div>
                <h5>iClas(N500)</h5>
                <h6>3 users</h6>
              </div>
            </div>
            <LensOutlined />
          </div>
        </Link>

        <Link to="/group/play-station/2">
          <div className="group">
            <div className="group-info">
              <img src={GroupIcon} alt="Group Icon" />
              <div>
                <h5>iClas(N1000)</h5>
                <h6>4 Users</h6>
              </div>
            </div>
            <LensOutlined />
          </div>
        </Link>

        <Link to="/group/play-station/3">
          <div className="group">
            <div className="group-info">
              <img src={GroupIcon} alt="Group Icon" />
              <div>
                <h5>iClas(N1500)</h5>
                <h6>2 Users</h6>
              </div>
            </div>
            <LensOutlined />
          </div>
        </Link>
      </div>
    </Modal>
  );
}

export default Groups;
