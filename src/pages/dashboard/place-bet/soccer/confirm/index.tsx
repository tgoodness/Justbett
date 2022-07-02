import { Modal } from 'antd';
import { Icon } from '@iconify/react';
import { IMAGES } from '../../../../../constant';
import './style.scss';

type Props = { visible: boolean; handleCancel: () => void };
function Confirm(props: Props) {
  const { visible, handleCancel } = props;
  return (
    <Modal
      title="Confirm Stake"
      visible={visible}
      onCancel={handleCancel}
      closable={false}
      footer={false}
      centered={true}
      maskClosable={false}
      className="header-centered"
    >
      <div className="confirm-place-bet">
        <div className="content">
          <div>
            <div className="item">
              <img src={IMAGES.perridot} alt="Package Icon" width="40" height="40" />
              <div>
                <h5>N500.00</h5>
                <h6>Amount</h6>
              </div>
            </div>
            <div className="item">
              {/* <Icon icon="akar-icons:crown" /> */}
              <Icon icon="icon-park-outline:crown" />
              <div>
                <h5>3 users</h5>
                <h6>Category</h6>
              </div>
            </div>
          </div>

          <div>
            <div className="item">
              <img src={IMAGES.CHE} alt="Prediction Icon" width="40" height="40" />
              <div>
                <h5>CHE wins</h5>
                <h6>Your Prediction</h6>
              </div>
            </div>
            <div className="item">
              <Icon icon="bx:user-circle" />
              <div>
                <h5>1 Player</h5>
                <h6>Winners</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-container">
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
      </div>
    </Modal>
  );
}

export default Confirm;
