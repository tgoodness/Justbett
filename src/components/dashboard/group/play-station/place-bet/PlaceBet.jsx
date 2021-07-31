import React from 'react';
import Soccer from './soccer/PlaceBet';
import Color from './color/PlaceBet';

function PlaceBet({ gameType }) {
  return gameType === 'soccer' ? <Soccer /> : <Color />;
}

export default PlaceBet;
