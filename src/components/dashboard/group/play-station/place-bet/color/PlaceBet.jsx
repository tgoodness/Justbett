import React from 'react';
import SelectColor from '../../../../../../lib/control/SelectColor';
import formHandler from './core/FormHandler';
import '../../../../../../lib/style/dashboard/place-bet-color.scss';

function PlaceBet() {
  const [color, handleColor, colors] = formHandler();

  return (
    <div className="place-bet-color">
      <div className="page-background">
        <div>
          <h5>Bet & Win Big</h5>
          <h6>Enjoy the game, happy friendship</h6>
        </div>
      </div>

      <SelectColor label="Select Color" value={color} onChange={handleColor} items={colors} />
      <div className="mt-4">
        <button className="btn btn-block btn-black">Continue</button>
      </div>
    </div>
  );
}

export default PlaceBet;
