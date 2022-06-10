import { useParams } from 'react-router';
import { CheckOutlined } from '@ant-design/icons';
import Pageview from '../../../../core-ui/dashboard/Pageview';
import Header from '../../../../core-ui/dashboard/Header';
import SelectPlayer from '../../../../components/select-player';
import SelectCategory from '../../../../components/select-category';
import SelectTeam from '../../../../components/SelectTeam';

import confirmBetModalHandler from '../../../../hooks/useModalHandler';
import addFriendModalHandler from '../../../../hooks/useModalHandler';
import logicHandler from './core/LogicHandler';
import formHandler from './core/FormHandler';

import ConfirmBet from './confirm';
import AddFriends from './add-friends';
import { IMAGES } from '../../../../constant';
import './style.scss';

function PlaceBet() {
  const { teamA, handleTeamA, teamB, handleTeamB } = logicHandler();
  const { playerId, categoryId } = useParams();

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

  const teams = [
    {
      peerId: 1,
      teamA: {
        id: 1,
        name: 'CHE',
        icon: IMAGES.CHE,
      },
      teamB: {
        id: 2,
        name: 'MAN',
        icon: IMAGES.MAN,
      },
    },

    {
      peerId: 2,
      teamA: {
        id: 1,
        name: 'ARS',
        icon: IMAGES.ARS,
      },
      teamB: {
        id: 2,
        name: 'BAR',
        icon: IMAGES.BAR,
      },
    },

    {
      peerId: 3,
      teamA: {
        id: 1,
        name: 'LIV',
        icon: IMAGES.LIV,
      },
      teamB: {
        id: 2,
        name: 'BAY',
        icon: IMAGES.BAY,
      },
    },
  ];

  const { player, handlePlayer, category, handleCategory, team, handleTeam, selectedTeam } =
    formHandler(teams);
  const { visible, showModal, handleCancel } = confirmBetModalHandler();

  const {
    visible: visibleA,
    showModal: showModalA,
    handleCancel: handleCancelA,
  } = addFriendModalHandler();

  return (
    <>
      <Header title="Place Bet">
        <h6>Place Bet</h6>
      </Header>
      <Pageview>
        <div className="place-bet-soccer">
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

          <SelectTeam
            name="team"
            id="team"
            label="Select Team"
            value={team}
            onChange={handleTeam}
            items={teams}
          />

          {team && (
            <div className="prediction">
              <label>What is your prediction</label>
              <div className="check-wrapper">
                <div className="teamA" id={'1'}>
                  <h6>{selectedTeam?.teamA.name} wins</h6>
                  <CheckOutlined
                    className={teamA.isChecked ? 'checked' : 'checked unchecked'}
                    onClick={handleTeamA}
                  />
                </div>
                <div className="teamB" id={'2'}>
                  <h6>{selectedTeam?.teamB?.name} wins</h6>
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
      </Pageview>
      <ConfirmBet visible={visible} handleCancel={handleCancel} />
      <AddFriends visible={visibleA} handleCancel={handleCancelA} />
    </>
  );
}

export default PlaceBet;
