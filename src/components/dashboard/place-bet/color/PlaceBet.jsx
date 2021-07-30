import React from 'react';

import Pageview from '../../../../lib/layout/dashboard/Pageview';
import SelectCategory from '../../../../lib/control/SelectCategory';
import SelectType from '../../../../lib/control/SelectType';
import SelectColor from '../../../../lib/control/SelectColor';
import JoinGameTypeInput from '../../../../lib/control/JoinGameTypeInput';
import JoinGameTypeCategory from '../../../../lib/control/JoinGameCategoryInput';

import modalHandler from './confirm/core/ModalHandler';
import addFriendModalHandler from './add-friends/core/ModalHandler';
import formHandler from './core/FormHandler';

import ConfirmBet from './confirm/Confirm';
import AddFriends from './add-friends/AddFriends';
import '../../../../lib/style/dashboard/place-bet-color.scss';

function PlaceBet() {
  const [
    category,
    handleCategory,
    type,
    handleType,
    color,
    handleColor,
    isJoinGroup,
    j_category,
    j_groupTypes,
    categories,
    groupTypes,
    colors,
  ] = formHandler();

  const [visible, showModal, handleCancel] = modalHandler();
  const [visibleA, showModalA, handleCancelA] = addFriendModalHandler();

  return (
    <Pageview title="Place Bet" data-aos="flip-left">
      <div className="place-bet-color">
        <div className="page-background">
          <div>
            <h5>Bet & Win Big</h5>
            <h6>Enjoy the game, happy friendship</h6>
          </div>
        </div>

        {isJoinGroup ? (
          <JoinGameTypeCategory value={j_category.label} />
        ) : (
          <SelectCategory
            label="Category"
            value={category}
            onChange={handleCategory}
            items={categories}
          />
        )}

        {isJoinGroup ? (
          <JoinGameTypeInput value={j_groupTypes.name} icon={j_groupTypes.icon} />
        ) : (
          <SelectType label="Type" value={type} onChange={handleType} items={groupTypes} />
        )}

        <SelectColor label="Select Color" value={color} onChange={handleColor} items={colors} />

        <div className="mt-4">
          <button
            className="btn btn-block btn-black"
            onClick={category === 'group' ? showModalA : showModal}
          >
            {category === 'group' ? 'Continue' : 'Place Bet'}
          </button>
        </div>
      </div>

      <ConfirmBet visible={visible} handleCancel={handleCancel} />
      <AddFriends visible={visibleA} handleCancel={handleCancelA} />
    </Pageview>
  );
}

export default PlaceBet;
