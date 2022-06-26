import { Link } from 'react-router-dom';
import util from '../../../helpers/utils';
type GameProps = {
  icon: string;
  name: string;
};

type Props = {
  data: GameProps;
};

function Item(props: Props) {
  const { data } = props;

  return (
    <Link to={`/place-bet/${data.name}`}>
      <div className="game">
        <img src={data.icon} alt="Game Icon" className="img-fluid" width="100" height="100" />
        <h6 className="game-title">{util.capitalize(data.name)}</h6>
      </div>
    </Link>
  );
}

export default Item;
