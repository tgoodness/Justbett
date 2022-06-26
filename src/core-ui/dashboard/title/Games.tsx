import Menu from '@mui/material/Menu';
import { Icon } from '@iconify/react';
import { PopoverProps } from '@material-ui/core';
import util from '../../../helpers/utils';
import './item.scss';


type GamesProps = { name: string; icon: string };
type Props = {
  anchorEl: PopoverProps['anchorEl'];
  handleClose: () => void;
  handleGame: (type: string) => void;
  currrentGame: string;
  games: GamesProps[];
};

const MenuItems = (props: Props) => {
  const { currrentGame, games, anchorEl, handleGame, handleClose } = props;

  return (
    <div>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="game-menu"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {games.map((game: GamesProps, key: number) => {
          return (
            <div className="item" key={key} onClick={() => handleGame(game.name)}>
              <div>
                <img src={game.icon} alt="Soccer" width="30" />
                <h6>{util.capitalize(game.name)}</h6>
              </div>
              {currrentGame === game.name && <Icon icon="akar-icons:check" />}
            </div>
          );
        })}
      </Menu>
    </div>
  );
};
export default MenuItems;
