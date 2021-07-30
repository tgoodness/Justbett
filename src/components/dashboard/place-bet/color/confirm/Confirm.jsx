import React from 'react';
import { Modal } from 'antd';
import '../../../../../lib/style/dashboard/confirm-place-bet.scss';

import Perridot from '../../../../../lib/assets/stones/perridot.png';
import CHE from '../../../../../lib/assets/clubes/CHE.png';
import User from '../../../../../lib/assets/home/user.svg';

function Dialog(props) {
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
            <img src={Perridot} alt="Package Icon" width="40" height="40" />
            <div>
              <h5>N500.00</h5>
              <h6>Amount</h6>
            </div>
          </div>
          <div className="prediction-wrapper">
            <img src={CHE} alt="Prediction Icon" width="40" height="40" />
            <div>
              <h5>CHE wins</h5>
              <h6>Your Prediction</h6>
            </div>
          </div>
        </div>

        <div className="section-two">
          <div className="users-wrapper">
            <img src={User} alt="User Icon" width="40" height="40" />
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

export default Dialog;
