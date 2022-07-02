import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import { Icon } from '@iconify/react';
import SideMenu from './SideMenu';
import AccountMenu from './AccountMenu';
import { IMAGES } from '../../constant';
import Sidebar from './title/Sidebar';
import MainHeading from './title/Main';
import useWindowSize from '../../helpers/UseWindowSize';
import './style/header.scss';
import './style/title.scss';

type Props = {
  title: string;
  children: React.ReactNode;
  isImage?: boolean;
  isBack?: boolean;
};

const Header = (props: Props) => {
  const { title, children, isImage = true, isBack = false } = props;

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

  const [width] = useWindowSize();
  const navigate = useNavigate();
  return (
    <>
      <div className="header-container">
        {isImage || width > 767 ? (
          <div className="appbar">
            <div className="page-title">
              {isBack && width < 767 ? (
                <Icon
                  icon="fluent:chevron-left-28-filled"
                  height="28"
                  onClick={() => navigate(-1)}
                />
              ) : (
                <MenuIcon className="menu-icon" onClick={handleClick} />
              )}
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
        ) : (
          <div className="sm-appbar">
            {isBack ? (
              <ChevronLeft className="menu-icon" onClick={() => navigate(-1)} />
            ) : (
              <MenuIcon className="menu-icon" onClick={handleClick} />
            )}
            <MainHeading> {children} </MainHeading>
          </div>
        )}
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
