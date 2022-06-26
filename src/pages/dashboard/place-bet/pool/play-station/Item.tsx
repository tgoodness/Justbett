import './item.scss';
import blurImage from '../../../../../assets/dashboard/pool/blur-bg.png';
type Props = {
  id: string;
  selectedBall: string;
  handleSelectedBall: (key: string) => void;
};

function Item(props: Props) {
  const { id, selectedBall, handleSelectedBall } = props;

  return (
    <div className="pool-play-station-item">
      <label
        onClick={() => handleSelectedBall(id)}
        className={selectedBall === id ? 'selected' : ''}
      >
        <img src={blurImage} alt="Mask" />
      </label>
    </div>
  );
}

export default Item;
