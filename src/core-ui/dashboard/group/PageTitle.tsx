import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MoreHorizOutlined } from '@material-ui/icons';
import GroupMenu from './GroupMenu';
import { IMAGES } from '../../../constant';

type Props = { participants: boolean };
const PageTitle = (props: Props): JSX.Element => {
  const { participants } = props;

  const [anchorElG, setAnchorElG] = useState(null);
  const handleClickG = (e: any) => {
    setAnchorElG(e.currentTarget);
  };
  const handleCloseG = () => {
    setAnchorElG(null);
  };

  return (
    <>
      <div className="group-page-heading">
        <Link to="/group-info">
          <div className="group-info">
            <img src={IMAGES.diamond} alt="Group Icon" />
            <div>
              <h5>iClas (500)</h5>
              {participants && <h6>Goodness, Abbey ...</h6>}
            </div>
          </div>
        </Link>
        <MoreHorizOutlined onClick={handleClickG} />
      </div>
      <GroupMenu anchorEl={anchorElG} handleClose={handleCloseG} />
    </>
  );
};

export default PageTitle;
