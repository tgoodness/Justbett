import React from 'react';
import { Link } from 'react-router-dom';

import Pageview from '../../lib/layout/home/HomePageview';
import '../../lib/style/home/home.scss';

import slide1 from '../../lib/assets/home/slide2.svg';
import ball from '../../lib/assets/home/ball.png';

import facebook from '../../lib/assets/home/social-icons/facebook.png';
import instagram from '../../lib/assets/home/social-icons/instagram.png';
import gmail from '../../lib/assets/home/social-icons/gmail.png';
import twitter from '../../lib/assets/home/social-icons/twitter.png';

function Home() {
  return (
    <Pageview>
      <div className="row">
        <div className="col-md-6">
          <div
            className="slide-wrapper"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img
              src={slide1}
              alt="Slide One"
              className="img-fluid"
              width="400"
            />
          </div>
        </div>
        <div
          className="col-md-4"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h1 className="heading">Increase Your Winning Chances</h1>
          <h5 className="sub-heading">
            A transparent, super simple betting platform that allows you to play
            and win with friends across the world.
          </h5>

          <div className="mt-4">
            <Link to="/register" className="btn btn-get-started-md">
              Get Started
              <span>
                <img src={ball} alt="Small Ball" />
              </span>
            </Link>
          </div>

          <div className="social-icons">
            <a href="#">
              <img src={facebook} alt="Facebook Icon" width="20" />
            </a>
            <a href="#">
              <img src={instagram} alt="Instagram Icon" width="20" />
            </a>

            <a href="#">
              <img src={gmail} alt="Gmail Icon" width="20" />
            </a>
            <a href="">
              <img src={twitter} alt="Twitter Icon" width="20" />
            </a>
          </div>
        </div>
      </div>
    </Pageview>
  );
}

export default Home;
