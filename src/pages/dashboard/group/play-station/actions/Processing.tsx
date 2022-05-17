import { IMAGES } from '../../../../../constant';

const Processing = () => {
  return (
    <div className="processing-wrapper">
      <img src={IMAGES.loader} alt="Loader" />
      <div>
        <h5>Processing result</h5>
        <h6>Please wait ...</h6>
      </div>
    </div>
  );
};

export default Processing;
