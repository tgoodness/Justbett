import Pageview from '../../../../core-ui/dashboard/group/Pageview';
import Header from '../../../../core-ui/dashboard/Header';
import JoinGroup from './join-group';
// import PlaceBet from './place-bet/PlaceBet';
// import Ready from './actions/Ready';
// import Processing from './actions/Processing';
// import AlmostReady from './actions/AlmostReady';
// import PlayAgain from './actions/PlayAgain';
import '../../../../style/dashboard/group/play-station.scss';

const PlayStation = () => {
  return (
    <>
      <Header title="iClase">
        <h6>iClase</h6>
      </Header>
      <Pageview participants={false}>
        <div className="play-station">
          <JoinGroup />
        </div>
      </Pageview>
    </>
  );
};

export default PlayStation;
