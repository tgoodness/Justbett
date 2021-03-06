import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { IGroup } from '../../../interfaces/game';

export default function Item(props: IGroup) {
  const { id, remaining, gameType, category } = props;
  const url =
    gameType === 'color' ? `/place-bet/color/${category.id}` : `/place-bet/soccer/${id}/${category.id}`;

  return (
    <Link to={url} className="link">
      <div className="game-wrapper">
        <div className="game-info">
          <img src={category.icon} alt="Category Icon" width="45" height="45" />
          <div>
            <h5>{category.name}</h5>
            <h6>{category.amount} NGN</h6>
          </div>
        </div>

        <div className="game-counter">
          <h5>Remaining</h5>
          <h6>
            <Badge badgeContent={remaining} color="secondary" />
          </h6>
        </div>
      </div>
    </Link>
  );
}
