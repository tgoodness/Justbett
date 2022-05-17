import { Modal } from 'antd';
import { IMAGES } from '../../../../../constant';
import '../../../../../style/dashboard/confirm-place-bet.scss';

type Props = { visible: boolean; handleCancel: () => void };
function Index(props: Props) {
  const { visible, handleCancel } = props;
  return (
    <Modal
      visible={visible}
      onCancel={handleCancel}
      closable={false}
      footer={false}
      centered={true}
      maskClosable={false}
    >
      <div className="confirm-place-bet">
        <div className="section-one">
          <div className="package-wrapper">
            <img src={IMAGES.perridot} alt="Package Icon" width="40" height="40" />
            <div>
              <h5>N500.00</h5>
              <h6>Amount</h6>
            </div>
          </div>
          <div className="prediction-wrapper">
            <img src={IMAGES.CHE} alt="Prediction Icon" width="40" height="40" />
            <div>
              <h5>CHE wins</h5>
              <h6>Your Prediction</h6>
            </div>
          </div>
        </div>

        <div className="section-two">
          <div className="users-wrapper">
            <img src={IMAGES.goodness} alt="User Icon" width="40" height="40" />
            <div>
              <h5>3 users</h5>
              <h6>Category</h6>
            </div>
          </div>
          <div className="winning">
            <h6>In this category only 1 user wins </h6>
          </div>
        </div>

        <div className="section-three">
          <div className="row">
            <div className="col-6">
              <button className="btn btn-outlined-black btn-block" onClick={handleCancel}>
                Cancel
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-black btn-block">Confirm</button>
            </div>
          </div>
        </div>

        <div className="close-footer">
          <h6 onClick={handleCancel}>Close</h6>
        </div>
      </div>
    </Modal>
  );
}

export default Index;
