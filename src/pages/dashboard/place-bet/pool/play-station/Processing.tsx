import { IMAGES } from '../../../../../constant';
import './processing.scss';

const Processing = () => {
  return (
    <div className="processing-container">
      <img src={IMAGES.loader} alt="Loader" />
      <div>
        <h5>Processing result</h5>
        <h6>Please wait ...</h6>
      </div>
    </div>
  );
};

export default Processing;
