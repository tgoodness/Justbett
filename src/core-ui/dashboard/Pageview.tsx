import React from 'react';
import SideBar from '../../pages/dashboard/siderbar';
import misc from '../../helpers/misc';
import './style/pageview.scss';

type Props = {
  children: React.ReactNode;
};

const Pageview = (props: Props) => {
  const { children } = props;
  return (
    <>
      <div className="page-container">
        <div className="view">
          <div className={'side-bar d-none d-md-block'}>
            <SideBar />
          </div>
          <div className="main animate__animated animate__fadeIn animate__slow">
            <div id="scrollbar" style={{ maxHeight: misc.mainContent() - 60 }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pageview;
