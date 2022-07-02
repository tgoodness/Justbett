import { useNavigate } from 'react-router-dom';
import Pageview from '../../../../core-ui/dashboard/Pageview';
import Header from '../../../../core-ui/dashboard/Header';
import SelectCategory from '../../../../components/select-category';
import SelectColor from '../../../../components/SelectColor';
import Button from '../../../../components/buttons/TextButton';
import formHandler from './core/FormHandler';

import { IMAGES } from '../../../../constant';
import './style.scss';

function PlaceBet() {
  const { category, handleCategory, color, handleColor } = formHandler();
  const categories = [
    {
      id: '1',
      name: 'Emerald',
      amount: 1000,
      icon: IMAGES.emerald,
    },

    {
      id: '2',
      name: 'Ruby',
      amount: 500,
      icon: IMAGES.ruby,
    },
    {
      id: '3',
      name: 'Silver',
      amount: 1000,
      icon: IMAGES.silver,
    },
  ];

  const colors = [
    {
      id: '1',
      name: 'Red',
      icon: IMAGES.redBall,
    },

    {
      id: '2',
      name: 'Green',
      icon: IMAGES.greenBall,
    },

    {
      id: '3',
      name: 'Blue',
      icon: IMAGES.blueBall,
    },
  ];

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/place-bet/pool/play-station');
  };

  return (
    <>
      <Header title="Place Bet" isImage={false}>
        <h5>Place Bet</h5>
        <Button label="Next" loading={false} onClick={handleRedirect} />
      </Header>
      <Pageview>
        <div className="place-bet-color">
          <div className="header-background">
            <div className="content">
              <img src={IMAGES.pool} alt="Color" width="100" />
              <img src={IMAGES.joinedCircles} alt="Joined Circles" width="100" />
            </div>

            <div className="footer">
              <h5>Bet & Win Big</h5>
              <h6>Enjoy the game, happy friendship</h6>
            </div>
          </div>

          <SelectCategory
            name="category"
            id="category"
            label="Category"
            value={category}
            onChange={handleCategory}
            items={categories}
          />

          <SelectColor
            label="Select Ball"
            name="type"
            id="type"
            value={color}
            onChange={handleColor}
            items={colors}
          />
        </div>
      </Pageview>
    </>
  );
}

export default PlaceBet;
