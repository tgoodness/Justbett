import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';
import Sidebar from '../siderbar';

const OngoingGames = () => {
  return (
    <>
      <Header title="Ongoing Games">
        <h5>Ongoing Games</h5>
      </Header>
      <Pageview>
        <Sidebar />
      </Pageview>
    </>
  );
};

export default OngoingGames;
