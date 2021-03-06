import SelectColor from '../../../../../../components/SelectColor';
import formHandler from './core/FormHandler';
import { IMAGES } from '../../../../../../constant';
import '../../../../../../style/dashboard/place-bet-color.scss';

function PlaceBet() {
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

  const { color, handleColor } = formHandler();

  return (
    <div className="place-bet-color">
      <div className="page-background">
        <div>
          <h5>Bet & Win Big</h5>
          <h6>Enjoy the game, happy friendship</h6>
        </div>
      </div>

      <SelectColor
        name="color"
        label="Select Color"
        value={color}
        onChange={handleColor}
        items={colors}
      />
      <div className="mt-4">
        <button className="btn btn-block btn-black">Continue</button>
      </div>
    </div>
  );
}

export default PlaceBet;
