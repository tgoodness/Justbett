import { LoadingOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';
import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';
import Button from '../../../components/buttons/TextButton';

import EditProfile from './Edit';
import formHandler from './core/FormHandler';
import modalHandler from '../../../hooks/useModalHandler';
import './style.scss';
import { Link } from 'react-router-dom';

function Profile() {
  const { image, handleImage } = formHandler();
  const { visible, showModal, handleCancel } = modalHandler();
  const loading = false;
  return (
    <>
      <Header title="Profile">
        <h5>Profile</h5>
        <Button label="Edit" onClick={showModal} />
      </Header>
      <Pageview>
        <div className="profile">
          <div className="content-header">
            <div className="upload">
              <label>
                <div className="mask-icon">
                  {loading ? (
                    <LoadingOutlined className="upload-spinner" />
                  ) : (
                    <Icon icon="ic:outline-add-a-photo" className="upload-icon" />
                  )}
                </div>
                <img src={image.preview} alt="User Picture" />
                <input type="file" className="d-none" onChange={handleImage} />
              </label>
            </div>

            <div className="info">
              <div>
                <h5>Goodness</h5>
                <h6>Bank Details, Security</h6>
              </div>
              <Link to="/settings">
                <Icon icon="fluent:chevron-right-28-filled" height="28" />
              </Link>
            </div>
          </div>

          <div className="content-body">
            <div className="item">
              <Icon icon="bytesize:user" />
              <div>
                <h5>Akinyemi Tobiloba </h5>
                <h6>First Name</h6>
              </div>
            </div>

            <div className="item">
              <Icon icon="mdi-light:email" />
              <div>
                <h5>goodnesstek@gmail.com</h5>
                <h6>Email Address</h6>
              </div>
            </div>

            <div className="item">
              <Icon icon="fluent:call-28-regular" />
              <div>
                <h5>08068694950</h5>
                <h6>Phone Number</h6>
              </div>
            </div>
            <div className="item">
              <Icon icon="healthicons:ui-user-profile-outline" />
              <div>
                <h5>Male</h5>
                <h6>Gender</h6>
              </div>
            </div>

            <div className="item">
              <Icon icon="bytesize:location" />
              <div>
                <h5>Osun</h5>
                <h6>State</h6>
              </div>
            </div>
          </div>
        </div>
      </Pageview>
      <EditProfile visible={visible} handleCancel={handleCancel} />
    </>
  );
}

export default Profile;
