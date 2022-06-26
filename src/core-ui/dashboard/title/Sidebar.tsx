import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Games from './Games';
import { IMAGES } from '../../../constant';
import './sidebar.scss';

function Sidebar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const games = [
    { name: 'soccer', icon: IMAGES.soccer },
    { name: 'color', icon: IMAGES.color },
  ];

  const [currrentGame, setCurrrentGame] = useState('soccer');
  const handleGame = (game: string) => {
    setCurrrentGame(game);
    handleClose();
  };

  const game = games.find((g) => g.name === currrentGame);

  return (
    <>
      <div className="sidebar-heading">
        <div onClick={handleClick}>
          <img src={game?.icon} alt="Group Icon" />
          <h5>Ongoing Games</h5>
          <Icon icon="fluent:chevron-down-28-filled" height="28" />
        </div>
        <Link to="/games">
          <Icon icon="gg:add-r" height="28" />
        </Link>
      </div>
      <Games
        games={games}
        currrentGame={currrentGame}
        anchorEl={anchorEl}
        handleClose={handleClose}
        handleGame={handleGame}
      />
    </>
  );
}

export default Sidebar;
