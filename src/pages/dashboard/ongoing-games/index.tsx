import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';
import Sidebar from '../siderbar';

const OngoingGames = () => {
  return (
    <>
      <Header title="Ongoing Games">
        <h6>Ongoing Games</h6>
      </Header>
      <Pageview>
        <Sidebar />
      </Pageview>
    </>
  );
};

export default OngoingGames;
