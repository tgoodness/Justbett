import React from 'react';
import Pageview from '../../lib/layout/home/Pageview';
import '../../lib/style/home/about.scss';
import aboutUs from '../../lib/assets/home/about-us.svg';

function About() {
	return (
		<Pageview>
			<div className="row display-flex">
				<div className="col-md-6" data-aos="zoom-in">
					<h1 className="heading">Betting made easy</h1>
					<h5 className="sub-heading">
						Justbett is a super fast, easy to use and peer to peer online gaming
						platform, it allows you to play with friends anytime anywhere with
						high probability of winning.
					</h5>
				</div>
				<div
					className="col-md-6 text-md-right mb-5 mt-3"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img src={aboutUs} alt="About Us" width="400" className="img-fluid" />
				</div>
			</div>
		</Pageview>
	);
}

export default About;
