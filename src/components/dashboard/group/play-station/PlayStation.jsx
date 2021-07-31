/* eslint-disable no-unused-vars */
import React from 'react';
import Pageview from '../../../../lib/layout/dashboard/group/Pageview';

import JoinGroup from './join-group/JoinGroup';
import PlaceBet from './place-bet/PlaceBet';
import Ready from './actions/Ready';
import Processing from './actions/Processing';
import AlmostReady from './actions/AlmostReady';
import PlayAgain from './actions/PlayAgain';
import '../../../../lib/style/dashboard/group/play-station.scss';

function PlayStation() {

  return (
    <Pageview>
      <div className="play-station">
        <JoinGroup />
      </div>
    </Pageview>
  );
}

export default PlayStation;
