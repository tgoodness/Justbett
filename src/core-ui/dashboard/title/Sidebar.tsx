import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { IMAGES } from '../../../constant';

import './sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar-heading">
      <div>
        <img src={IMAGES.soccer} alt="Group Icon" />
        <h5>Ongoing Games</h5>
        <Icon icon="fluent:chevron-down-28-filled" height="28" />
      </div>
      <Link to="/games">
        <Icon icon="gg:add-r" height="28" />
      </Link>
    </div>
  );
}

export default Sidebar;
