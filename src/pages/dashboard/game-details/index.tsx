import { IMAGES } from '../../../constant';
import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';
import ColorItem from './ColorItem';
// import SoccerItem from './SoccerItem';
import './style.scss';

const GameDetails = () => {
  // const data = [
  //   {
  //     teamA: { icon: IMAGES.ARS, name: 'ARS', goals: 5, predicted: true },
  //     teamB: { icon: IMAGES.MAN, name: 'MAN', goals: 1, predicted: false },
  //     points: 4,
  //     postion: '1st',
  //     username: 'Goodness',
  //     location: 'Lagos, Nigeria',
  //   },
  //   {
  //     teamA: { icon: IMAGES.CHE, name: 'CHE', goals: 2, predicted: false },
  //     teamB: { icon: IMAGES.LIV, name: 'LIV', goals: 1, predicted: true },
  //     points: 1,
  //     postion: '2nd',
  //     username: 'Raphael',
  //     location: 'Osun, Nigeria',
  //   },
  // ];

  const data = [
    { icon: IMAGES.red, name: 'Red', won: true, predicted: true },
    { icon: IMAGES.green, name: 'Green', won: false, predicted: false },
    { icon: IMAGES.blue, name: 'Blue', won: false, predicted: false },
  ];
  return (
    <>
      <Header title="Game Details">
        <h5>Game Details</h5>
      </Header>
      <Pageview>
        <div className="game-details">
          <div className="header-background">
            <div className="content">
              <div>
                <h5>Diamond</h5>
                <h6>N100.00</h6>
              </div>
              <div>
                <img src={IMAGES.joinedCircles} alt="Joined Circles" width="100" />
                <img src={IMAGES.color} alt="Soccer" width="70" />
              </div>
            </div>
          </div>

          <h4>Result (5 Players)</h4>

          {data.map((item, i) => {
            return <ColorItem item={item} key={i} />;
          })}
        </div>
      </Pageview>
    </>
  );
};

export default GameDetails;
