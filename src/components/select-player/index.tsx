import SelectPlayer from './Select';
import SelectedPlayer from './Selected';
import { IPlayer } from '../../interfaces/game';

type Props = {
  name: string;
  id: string;
  label?: string;
  value: string | number;
  error?: boolean | undefined;
  onChange?: (e: any) => void;
  helperText?: string | boolean | undefined;
  items: IPlayer[] | [];
  playerId: string | undefined;
};

function index(props: Props) {
  const { name, id, label, value, error = false, onChange, helperText, items, playerId } = props;
  return (
    <>
      {playerId ? (
        <SelectedPlayer name={name} id={id} label={label} items={items} playerId={playerId} />
      ) : (
        <SelectPlayer
          id={id}
          name={name}
          label={label}
          value={value}
          onChange={onChange}
          error={error}
          helperText={helperText}
          items={items}
        />
      )}
    </>
  );
}

export default index;
