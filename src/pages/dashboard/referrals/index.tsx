import { Icon } from '@iconify/react';
import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';
import modalHandler from '../../../hooks/useModalHandler';
import Referees from './Referees';
import './style.scss';
import { IMAGES } from '../../../constant';

function Referrals() {
  const { visible, showModal, handleCancel } = modalHandler();

  return (
    <>
      <Header title="Referrals">
        <h5>Referrals</h5>
      </Header>
      <Pageview>
        <div className="referrals">
          <img
            src={IMAGES.referrals}
            alt="Referrals Illustrator"
            className="img-fluid"
            width="250"
          />

          <div className="invite-instruction">
            <h6>
              Invite a friend and get N200 when they sign up with your referral code, and atleast
              play a game
            </h6>
          </div>

          <div className="referees">
            <div>
              <h5>20</h5>
              <h6>Number of Sign-ups</h6>
            </div>

            <div onClick={showModal}>
              <h6>View all your invites</h6>
              <Icon icon="fluent:chevron-right-28-filled" />
            </div>
          </div>

          <div className="code">
            <h5>YETESXR</h5>
            <span>Copy Code</span>
          </div>
        </div>
        <Referees visible={visible} handleCancel={handleCancel} />
      </Pageview>
    </>
  );
}

export default Referrals;
