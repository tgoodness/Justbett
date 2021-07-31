import React from 'react';
import { CopyOutlined } from '@ant-design/icons';
import { Image } from 'antd';

import { DatePicker } from 'antd';
import moment from 'moment';

import Pageview from '../../../lib/layout/dashboard/Pageview';
import Input from '../../../lib/control/InputFilled';
import Select from '../../../lib/control/Select';
import '../../../lib/style/dashboard/profile.scss';
import formHandler from './core/FormHandler';

function Profile() {
  // eslint-disable-next-line no-unused-vars
  const [image, handleImage, dob, handleDob] = formHandler();

  const defaultDOB = '05/05/2000';

  return (
    <Pageview title="Profile">
      <div className="profile">
        <div className="image-wrapper">
          <div>
            <Image src={image.preview} alt="User Picture" size={100} />
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
            <Input label="First Name" />
          </div>

          <div className="data">
            <Input label="Last Name" />
          </div>

          <div className="data">
            <Select label="State/City" items={['Osun', 'Lagos', 'Delta']} />
          </div>

          <div className="data">
            <Input label="Phone Number" />
          </div>

          <div className="data">
            <Select label="Gender" items={['Male', 'Female']} />
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
  );
}

export default Profile;
