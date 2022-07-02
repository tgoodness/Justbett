import './item.scss';
import blurImage from '../../../../../assets/dashboard/pool/blur-bg.png';
type Props = {
  id: string;
  selectedBall: string;
  isLoading: boolean;
  handleSelectedBall: (key: string) => void;
  img: string;
};

function Item(props: Props) {
  const { id, selectedBall, handleSelectedBall, isLoading, img } = props;

  return (
    <div className="pool-play-station-item">
      
      <label
        onClick={() => handleSelectedBall(id)}
        className={selectedBall === id ? 'selected' : ''}
      >
        {img && !isLoading ? (
          <img src={img} alt="Ball" className="processed-img" />
        ) : (
          <img src={blurImage} alt="Mask Image" className="blured-img" />
        )}
      </label>
    </div>
  );
}

export default Item;
