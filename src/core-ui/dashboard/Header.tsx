import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SideMenu from './SideMenu';
import AccountMenu from './AccountMenu';
import { IMAGES } from '../../constant';
import Sidebar from './title/Sidebar';
import MainHeading from './title/Main';
import './style/header.scss';
import './style/title.scss';

type Props = {
  title: string;
  children: React.ReactNode;
};

const Header = (props: Props) => {
  const { title, children } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElA, setAnchorElA] = useState(null);
  const handleClickA = (e: any) => {
    setAnchorElA(e.currentTarget);
  };
  const handleCloseA = () => {
    setAnchorElA(null);
  };

  return (
    <>
      <div className="header-container">
        <div className="appbar">
          <div className="page-title">
            <MenuIcon className="menu-icon" onClick={handleClick} />
            <h5>
              <span className="d-none d-md-block">JustBett</span>
              <span className="d-md-none">{title}</span>
            </h5>
          </div>

          <img
            src={IMAGES.goodness}
            alt="User Avater"
            className="user-photo"
            onClick={handleClickA}
          />
        </div>
      </div>

      <div className="title-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="title">
          <MainHeading> {children} </MainHeading>
        </div>
      </div>

      <SideMenu anchorEl={anchorEl} handleClose={handleClose} />
      <AccountMenu anchorEl={anchorElA} handleClose={handleCloseA} />
    </>
  );
};

export default Header;
