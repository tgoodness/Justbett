import { useParams } from 'react-router';
import Pageview from '../../../../core-ui/dashboard/Pageview';
import Header from '../../../../core-ui/dashboard/Header';
import SelectCategory from '../../../../components/select-category';
import SelectColor from '../../../../components/SelectColor';
import Button from '../../../../components/buttons/TextButton';

import confirmBetModalHandler from '../../../../hooks/useModalHandler';
import formHandler from './core/FormHandler';
import ConfirmBet from './confirm';
import { IMAGES } from '../../../../constant';
import './style.scss';

function PlaceBet() {
  const { categoryId } = useParams();
  const {category, handleCategory, color, handleColor } = formHandler();


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
      name: 'Green',
      icon: IMAGES.green,
    },

    {
      id: '2',
      name: 'Blue',
      icon: IMAGES.blue,
    },

    {
      id: '3',
      name: 'Red',
      icon: IMAGES.red,
    },
  ];

  const { visible, showModal, handleCancel } = confirmBetModalHandler();

  return (
    <>
      <Header title="Place Bet">
        <h5>Place Bet</h5>
        <Button label="Next" loading={false} onClick={showModal} />
      </Header>
      <Pageview>
        <div className="place-bet-color">
          <div className="header-background">
            <div className="content">
              <img src={IMAGES.color} alt="Color" width="100" />
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
            categoryId={categoryId}
          />

          <SelectColor
            label="Select Color"
            name="type"
            id="type"
            value={color}
            onChange={handleColor}
            items={colors}
          />
        </div>
      </Pageview>
      <ConfirmBet visible={visible} handleCancel={handleCancel} />
    </>
  );
}

export default PlaceBet;
