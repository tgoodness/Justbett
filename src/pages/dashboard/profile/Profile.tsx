import { CopyOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';

import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';
import Input from '../../../components/InputFilled';
import Select from '../../../components/Select';
import formHandler from './core/FormHandler';
import '../../../style/dashboard/profile.scss';

function Profile() {
  const { image, handleImage, handleDob } = formHandler();
  const defaultDOB = '05/05/2000';

  return (
    <>
      <Header title="Profile">
        <h6>Profile</h6>
      </Header>
      <Pageview>
        <div className="profile">
          <div className="image-wrapper">
            <div>
              <Image src={image.preview} alt="User Picture" sizes="100" />
            </div>
            <label>
              <h5>Upload Photo</h5>
              <input type="file" className="d-none" onChange={handleImage} />
            </label>
            <h6>
              teegoodness <CopyOutlined />
            </h6>
          </div>

          <>
            <div className="data">
              <Input name="firstName" id="firstName" value="" label="First Name" />
            </div>

            <div className="data">
              <Input name="lastName" id="lastName" value="" label="Last Name" />
            </div>

            <div className="data">
              <Select
                name="city"
                id="city"
                value=""
                label="State/City"
                items={['Osun', 'Lagos', 'Delta']}
              />
            </div>

            <div className="data">
              <Input name="phoneNumber" id="phoneNumber" value="" label="Phone Number" />
            </div>

            <div className="data">
              <Select
                name="gender"
                id="gender"
                value=""
                label="Gender"
                items={['Male', 'Female']}
              />
            </div>

            <div className="data">
              <DatePicker
                format="MM/DD/YYYY"
                placeholder="Date of Birth"
                {...(defaultDOB !== null && { defaultValue: moment(defaultDOB, 'MM/DD/YYYY') })}
                onChange={handleDob}
              />
            </div>

            <div className="mt-4">
              <button className="btn btn-black  btn-block ">Save</button>
            </div>
          </>
        </div>
      </Pageview>
    </>
  );
}

export default Profile;
