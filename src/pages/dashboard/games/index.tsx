import { Link } from 'react-router-dom';
import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';
import { IMAGES } from '../../../constant';
import '../../../style/dashboard/games.scss';

const Games = () => {
  return (
    <>
      <Header title="Games">
        <h6>Games</h6>
      </Header>
      <Pageview>
        <div className="games-page">
          <div className="games">
            <div className="row">
              <div className="col-6 ">
                <Link to="/place-bet/soccer">
                  <div className="game">
                    <div className="game-icon">
                      <img src={IMAGES.soccer} alt="Soccer Icon" className="img-fluid" />
                    </div>
                    <div className="game-title">Soccer</div>
                  </div>
                </Link>
              </div>

              <div className="col-6">
                <Link to="/place-bet/color">
                  <div className="game">
                    <div className="game-icon">
                      <img src={IMAGES.color} alt="Soccer Icon" className="img-fluid" />
                    </div>
                    <div className="game-title">Color</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Pageview>
    </>
  );
};

export default Games;
