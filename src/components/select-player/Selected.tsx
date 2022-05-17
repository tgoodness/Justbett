import { Input } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { IPlayer } from '../../interfaces/game';

type Props = {
  name: string;
  id: string;
  label?: string;
  items: IPlayer[] | [];
  playerId: string | undefined;
};

const Category = (props: Props) => {
  const { label, name, id, items, playerId } = props;
  const data = items.find((p) => p.id === playerId);

  return (
    <FormControl className="text-field">
      <InputLabel htmlFor="category">{label}</InputLabel>
      <Input type="text" value={data?.label} id={id} name={name}  />
    </FormControl>
  );
};

export default Category;
