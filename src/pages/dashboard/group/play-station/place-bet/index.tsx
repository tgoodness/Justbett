import Soccer from './soccer/PlaceBet';
import Color from './color';

type Props = { gameType: string };

function PlaceBet(props: Props) {
  const { gameType } = props;
  return gameType === 'soccer' ? <Soccer /> : <Color />;
}

export default PlaceBet;
