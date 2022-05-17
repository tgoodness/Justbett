import { Link } from 'react-router-dom';

import { ChevronRight, LockOutlined } from '@material-ui/icons';
import { ProfileOutlined, UserOutlined, BankOutlined } from '@ant-design/icons';
import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';
import bankModalHandler from '../../../hooks/useModalHandler';
import passwordModalHandler from '../../../hooks/useModalHandler';
import pinModalHandler from '../../../hooks/useModalHandler';

import UpdateBank from './update-bank';
import ChangePassword from './change-password';
import ChangePin from './change-pin';
import '../../../style/dashboard/settings.scss';

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
        <h6>Settings</h6>
      </Header>
      <Pageview>
        <div className="settings">
          <Link to="/profile">
            <div className="control">
              <h6>
                <span className="profile-icon">
                  <UserOutlined />
                </span>
                <span>Update Profile</span>
              </h6>
              <ChevronRight />
            </div>
          </Link>
          <div className="control" onClick={showModalB}>
            <h6>
              <span className="bank-icon">
                <BankOutlined />
              </span>
              <span>Update Bank</span>
            </h6>
            <ChevronRight />
          </div>

          <div className="control" onClick={showModalPass}>
            <h6>
              <span className="lock-icon">
                <LockOutlined />
              </span>
              <span>Change Password</span>
            </h6>
            <ChevronRight />
          </div>

          <div className="control" onClick={showModalPin}>
            <h6>
              <span className="pin-icon">
                <ProfileOutlined />
              </span>
              <span>Change Pin</span>
            </h6>
            <ChevronRight />
          </div>
        </div>
      </Pageview>
      <UpdateBank visible={visibleB} handleCancel={handleCancelB} />
      <ChangePassword visible={visiblePass} handleCancel={handleCancelPass} />
      <ChangePin visible={visiblePin} handleCancel={handleCancelPin} />
    </>
  );
}

export default Settings;
