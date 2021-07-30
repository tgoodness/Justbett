
import React, { useState } from 'react';
import { MoreHorizOutlined } from '@material-ui/icons';
import GroupMenu from '../group/GroupMenu';

import Diamond from '../../../assets/stones/diamond.png';
import { Link } from 'react-router-dom';

function PageTitle(props) {
  const { participants } = props;
  
  const [anchorElG, setAnchorElG] = useState(null);
  const handleClickG = (event) => {
    setAnchorElG(event.currentTarget);
  };
  const handleCloseG = () => {
    setAnchorElG(null);
  };

  return <>
    <div className="group-page-heading">
      <Link to="/group-info" >

        <div className="group-info">
          <img src={Diamond} alt="Group Icon" />
          <div>
            <h5>iClas (500)</h5>
           {participants && <h6>Goodness, Abbey ...</h6> } 
          </div>
        </div>

      </Link>
      <MoreHorizOutlined onClick={handleClickG} />
    </div>
    <GroupMenu anchorEl={anchorElG} handleClose={handleCloseG} />
  </>;
}

export default PageTitle;
