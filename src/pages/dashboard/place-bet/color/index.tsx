import { useParams } from 'react-router';
import Pageview from '../../../../core-ui/dashboard/Pageview';
import Header from '../../../../core-ui/dashboard/Header';
import SelectPlayer from '../../../../components/select-player';
import SelectCategory from '../../../../components/select-category';
import SelectColor from '../../../../components/SelectColor';
import confirmBetModalHandler from '../../../../hooks/useModalHandler';
import addFriendModalHandler from '../../../../hooks/useModalHandler';
import formHandler from './core/FormHandler';

import ConfirmBet from './confirm';
import AddFriends from './add-friends';
import { IMAGES } from '../../../../constant';
import './style.scss';

function PlaceBet() {
  const { playerId, categoryId } = useParams();
  const { player, handlePlayer, category, handleCategory, color, handleColor } = formHandler();

  const players = [
    { id: '1', label: '3 Users', user: '3' },
    { id: '2', label: '5 Users', user: '5' },
    { id: '3', label: 'Play With Friends', user: 'group' },
  ];

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
  const {
    visible: visibleA,
    showModal: showModalA,
    handleCancel: handleCancelA,
  } = addFriendModalHandler();

  return (
    <>
      <Header title="Place Bet">
        <h6>Ongoing Games</h6>
      </Header>
      <Pageview>
        <div className="place-bet-color">
          <div className="page-background">
            <div>
              <h5>Bet & Win Big</h5>
              <h6>Enjoy the game, happy friendship</h6>
            </div>
          </div>

          <SelectPlayer
            name="player"
            id="player"
            label="Player"
            value={player}
            onChange={handlePlayer}
            items={players}
            playerId={playerId}
          />

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

          <div className="mt-4">
            <button
              className="btn btn-block btn-black"
              onClick={category === 'group' ? showModalA : showModal}
            >
              {category === 'group' ? 'Continue' : 'Place Bet'}
            </button>
          </div>
        </div>
      </Pageview>
      <ConfirmBet visible={visible} handleCancel={handleCancel} />
      <AddFriends visible={visibleA} handleCancel={handleCancelA} />
    </>
  );
}

export default PlaceBet;
