import { useState, useEffect } from 'react';
import Pageview from '../../../../../core-ui/dashboard/Pageview';
import Header from '../../../../../core-ui/dashboard/Header';
import Processing from './Processing';
import Item from './Item';
import { IMAGES } from '../../../../../constant';
import './style.scss';
import misc from '../../../../../helpers/misc';

function PlaceBet() {
  const [selectedBall, setSelectedBall] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [imgList, setImgList] = useState<string[]>();

  const handleSelectedBall = (key: string) => {
    setSelectedBall(key);
    setLoading(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      const imgs = misc.shuffle([
        IMAGES.blueBall,
        IMAGES.redBall,
        IMAGES.greenBall,
        IMAGES.yellowBall,
      ]);
      setImgList(imgs);
    }, 5000);
  });

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
                <img src={IMAGES.redBall} alt="Soccer" width="70" />
              </div>
            </div>
          </div>
          {isLoading ? (
            <Processing />
          ) : (
            <h5 className="choose-prediction">Choose your prediction</h5>
          )}
          <div className="balls-container">
            <div>
              {['A', 'B', 'C', 'D'].map((item: string, i: number) => {
                return (
                  <Item
                    key={i}
                    id={item}
                    isLoading={isLoading}
                    selectedBall={selectedBall}
                    handleSelectedBall={handleSelectedBall}
                    img={imgList ? imgList[i] : ''}
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
