import React from 'react';
import { CheckOutlined } from '@ant-design/icons';
import Pageview from '../../../../lib/layout/dashboard/Pageview';
import SelectCategory from '../../../../lib/control/SelectCategory';
import SelectType from '../../../../lib/control/SelectType';
import SelectTeam from '../../../../lib/control/SelectTeam';
import JoinGameTypeInput from '../../../../lib/control/JoinGameTypeInput';
import JoinGameTypeCategory from '../../../../lib/control/JoinGameCategoryInput';

import modalHandler from './confirm/core/ModalHandler';
import addFriendModalHandler from './add-friends/core/ModalHandler';
import logicHandler from './core/LogicHandler';
import formHandler from './core/FormHandler';

import ConfirmBet from './confirm/Confirm';
import AddFriends from './add-friends/AddFriends';
import '../../../../lib/style/dashboard/place-bet-soccer.scss';

function PlaceBet() {
  // eslint-disable-next-line no-unused-vars
  const [prediction, teamA, handleTeamA, teamB, handleTeamB] = logicHandler();

  const [
    category,
    handleCategory,
    type,
    handleType,
    team,
    handleTeam,
    isJoinGroup,
    j_category,
    j_groupTypes,
    categories,
    groupTypes,
    teams,
    peerTeams,
  ] = formHandler();

  const [visible, showModal, handleCancel] = modalHandler();
  const [visibleA, showModalA, handleCancelA] = addFriendModalHandler();

  return (
    <Pageview title="Place Bet" data-aos="flip-left">
      <div className="place-bet-soccer">
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

        <SelectTeam label="Select Team" value={team} onChange={handleTeam} items={teams} />

        {team && (
          <div className="prediction">
            <label>What's your prediction? </label>
            <div className="check-wrapper">
              <div className="teamA" id={1}>
                <h6>{peerTeams.teamA.name} wins</h6>
                <CheckOutlined
                  className={teamA.isChecked ? 'checked' : 'checked unchecked'}
                  onClick={handleTeamA}
                />
              </div>
              <div className="teamB" id={2}>
                <h6>{peerTeams.teamB.name} wins</h6>
                <CheckOutlined
                  className={teamB.isChecked ? 'checked' : 'checked unchecked'}
                  onClick={handleTeamB}
                />
              </div>
            </div>
          </div>
        )}

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
