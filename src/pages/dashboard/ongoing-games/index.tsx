import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';
import Sidebar from '../siderbar';
import useWindowSize from '../../../helpers/UseWindowSize';

const OngoingGames = () => {
  const [width] = useWindowSize();

  return (
    <>
      <Header title="Ongoing Games" isImage={false}>
        <h5>Ongoing Games</h5>
        {width < 767 && (
          <Link to="/games">
            <Icon icon="gg:add-r" height="28" />
          </Link>
        )}
      </Header>
      <Pageview>
        <Sidebar />
      </Pageview>
    </>
  );
};

export default OngoingGames;
