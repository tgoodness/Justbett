import { Link } from 'react-router-dom';
import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';
import bankModalHandler from '../../../hooks/useModalHandler';
import passwordModalHandler from '../../../hooks/useModalHandler';
import pinModalHandler from '../../../hooks/useModalHandler';

import UpdateBank from './edit-bank';
import ChangePassword from './change-password';
import ChangePin from './change-pin';
import Item from './Item';
import './style.scss';


function Settings() {
  const {
    visible: visibleB,
    showModal: showModalB,
    handleCancel: handleCancelB,
  } = bankModalHandler();

  const {
    visible: visiblePass,
    showModal: showModalPass,
    handleCancel: handleCancelPass,
  } = passwordModalHandler();

  const {
    visible: visiblePin,
    showModal: showModalPin,
    handleCancel: handleCancelPin,
  } = pinModalHandler();

  return (
    <>
      <Header title="Settings">
        <h5>Settings</h5>
      </Header>

      <Pageview>
        <div className="settings">
          <Link to="/referrals">
            <Item label="Referrals" type="referrals" />
          </Link>
        
          <Link to="/profile">
            <Item label="Profile" type="profile" />
          </Link>

          <Item label="Edit Bank" type="edit-bank" showModal={showModalB} />
          <Item label="Change PIN" type="change-pin" showModal={showModalPin} />
          <Item label="Change Password" type="change-password" showModal={showModalPass} />

          <Link to="/support">
            <Item label="Support" type="support" />
          </Link>
        </div>
      </Pageview>
      <UpdateBank visible={visibleB} handleCancel={handleCancelB} />
      <ChangePassword visible={visiblePass} handleCancel={handleCancelPass} />
      <ChangePin visible={visiblePin} handleCancel={handleCancelPin} />
    </>
  );
}

export default Settings;
