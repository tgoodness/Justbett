import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AOS from 'aos';

import 'aos/dist/aos.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

ReactDOM.render(<App />, document.getElementById('root'));
AOS.init();

