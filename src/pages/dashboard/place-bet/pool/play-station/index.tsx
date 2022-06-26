import { useState } from 'react';
import Pageview from '../../../../../core-ui/dashboard/Pageview';
import Header from '../../../../../core-ui/dashboard/Header';

import Item from './Item';
import { IMAGES } from '../../../../../constant';
import './style.scss';

function PlaceBet() {
  const [selectedBall, setSelectedBall] = useState('');
  const handleSelectedBall = (key: string) => {
    setSelectedBall(key);
  };

  return (
    <>
      <Header title="Place Bet">
        <h5>Place Bet</h5>
      </Header>
      <Pageview>
        <div className="pool-play-station">
          <div className="header-background">
            <div className="content">
              <div>
                <h5>Diamond</h5>
                <h6>N100.00</h6>
              </div>
              <div>
                <img src={IMAGES.joinedCircles} alt="Joined Circles" width="100" />
                <img src={IMAGES.redBall} alt="Soccer" width="60" />
              </div>
            </div>
          </div>

          <div className="stages-container">
            <h5>Choose your prediction</h5>
            <div>
              {['A', 'B', 'C', 'D'].map((i: string) => {
                return (
                  <Item
                    key={i}
                    id={i}
                    selectedBall={selectedBall}
                    handleSelectedBall={handleSelectedBall}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Pageview>
    </>
  );
}

export default PlaceBet;
