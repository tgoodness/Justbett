import React from 'react';
import { CheckOutlined } from '@ant-design/icons';

import SelectTeam from '../../../../../../lib/control/SelectTeam';
import logicHandler from './core/LogicHandler';
import formHandler from './core/FormHandler';
import '../../../../../../lib/style/dashboard/group/place-bet-soccer.scss';

function PlaceBet() {
  // eslint-disable-next-line no-unused-vars
  const [prediction, teamA, handleTeamA, teamB, handleTeamB] = logicHandler();
  const [team, handleTeam, teams, peerTeams] = formHandler();

  return (
    <div className="group-place-bet-soccer">
      <div className="page-background">
        <div>
          <h5>Bet & Win Big</h5>
          <h6>Enjoy the game, happy friendship</h6>
        </div>
      </div>

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

      <div className="btn-wrapper">
        <button className="btn btn-block btn-black">Continue</button>
      </div>
    </div>
  );
}

export default PlaceBet;
