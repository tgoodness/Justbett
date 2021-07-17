import React from 'react';
import { Divider } from '@material-ui/core';
import Pageview from '../../../lib/layout/home/Pageview';
import Input from '../../../lib/control/Input';
import Select from '../../../lib/control/Select';
import Button from '../../../lib/control/Button';
import '../../../lib/style/home/contact.scss';

import FormHandler from './core/FormHandler';
import locationImage from '../../../lib/assets/home/location.png';

import {
  Instagram,
  EmailOutlined,
  Twitter,
  Facebook,
  LocationOnOutlined,
  CallOutlined,
} from '@material-ui/icons';

function Contact () {
  const [
    email,
    handleEmail,
    subject,
    handleSubject,
    body,
    handleBody,
  ] = FormHandler();

  return (
    <Pageview className="contact">
      <div className="row" style={ { display: 'flex', alignItems: 'center' } }>
        <div className="col-md-6">
          <div
            className="location-image-wrapper"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <img
              src={ locationImage }
              alt="Location Image"
              className="img-fluid"
              width="200"
            />
          </div>

          <div className="row" data-aos="fade-up" data-aos-duration="2000">
            <div className="col-md-6">
              <div className="icon-wrapper">
                <EmailOutlined />
                <h6>hi@justbett.com</h6>
              </div>
              <Divider />
            </div>

            <div className="col-md-6">
              <div className="icon-wrapper">
                <Instagram />
                <h6>justbettOnline</h6>
              </div>
              <Divider />
            </div>

            <div className="col-md-6">
              <div className="icon-wrapper">
                <Facebook />
                <h6>justbettOnline</h6>
              </div>
              <Divider />
            </div>

            <div className="col-md-6">
              <div className="icon-wrapper">
                <CallOutlined />
                <h6>08068694950</h6>
              </div>
              <Divider />
            </div>

            <div className="col-md-6">
              <div className="icon-wrapper">
                <LocationOnOutlined />
                <h6>hi@justbett.com</h6>
              </div>
              <Divider />
            </div>

            <div className="col-md-6">
              <div className="icon-wrapper">
                <Twitter />
                <h6>justbettOnline</h6>
              </div>
              <Divider />
            </div>
          </div>
        </div>

        <div
          className="col-md-6 mb-3"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <Input
            label="Email"
            value={ email.value }
            type="email"
            onChange={ handleEmail }
            error={ email.error }
            helperText={ email.helperText }
          />

          <Select
            label="Subject"
            value={ subject.value }
            type="text"
            onChange={ handleSubject }
            error={ subject.error }
            helperText={ subject.helperText }
            items={ [
              'Issue logging',
              'Withdrawal Delay',
              'Can\'t withdraw my fund',
            ] }
          />

          <Input
            label="Body of message"
            value={ body.value }
            type="text"
            onChange={ handleBody }
            error={ body.error }
            helperText={ body.helperText }
            multiline={ true }
          />

          <div className="mt-5">
            <Button
              label="Send Message"
              className="btn  btn-contact btn-block"
            />
          </div>
        </div>
      </div>
    </Pageview>
  );
}

export default Contact;
