import { IMAGES } from '../../constant';
import './style.scss';

const FallBack = (): JSX.Element => {
  return (
    <div className="fallback">
      <img src={IMAGES.logo} alt="Loader" width="50" />
    </div>
  );
};

export default FallBack;
