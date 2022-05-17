import React from 'react';
import Header from './Header';
import MobileHeader from './MobileHeader';
import SideBar from '../../../pages/dashboard/siderbar';

import PageTitle from './PageTitle';
import misc from '../../../helpers/misc';
import useWindowSize from '../../../helpers/UseWindowSize';
import '../style/pageview.scss';

type Props = {
  title?: string;
  participants: boolean;
  children: React.ReactNode;
};
const Pageview = (props: Props): JSX.Element => {
  const { title = '', participants = true, children, ...rest } = props;
  const [width] = useWindowSize();

  return (
    <div className="container p-0">
      <div className="page-wrapper">
        {width > 767 ? <Header title={title} /> : <MobileHeader participants={participants} />}

        <div className="row no-gutters">
          <div className="col-md-5 no-gutters">
            <div className="side-bar d-none d-md-block">
              <div>
                <SideBar />
              </div>
            </div>
          </div>

          <div className="col-md-7 no-gutters">
            <div className="main-page-wrapper" {...rest}>
              <PageTitle participants={participants} />
              <div id="scrollbar" style={{ maxHeight: misc.mainContent() - 60 }}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pageview;
