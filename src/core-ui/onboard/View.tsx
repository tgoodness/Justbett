import React from 'react';
import { Link } from 'react-router-dom';

import ronaldo from '../../assets/home/slide2.svg';
import { IMAGES } from '../../constant';
import './style/view.scss';

type Props = {
  children: React.ReactNode;
  title: string;
  bottomLink: React.ReactNode;
  className: string;
};

const View = (props: Props) => {
  const { children, title, bottomLink, ...rest } = props;

  return (
    <div {...rest}>
      <div className="container mt-5">
        <div className="row">
          <div className="offset-md-1 col-md-10">
            <div className="row">
              <div className="col-md-6" data-aos="zoom-out-right">
                <img src={ronaldo} alt="Slide" className="onboard-image img-fluid" />
              </div>
              <div className="col-md-6">
                <div className="onbaord-form" data-aos="fade-left">
                  <div className="onboard-logo-wrapper">
                    <Link to="/">
                      <img src={IMAGES.logo} alt="App Logo" width="120" className="img-fluid" />
                    </Link>
                    <h6>{title}</h6>
                  </div>
                  {children}
                </div>
                <div className="bottom-link-wrapper">{bottomLink}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
