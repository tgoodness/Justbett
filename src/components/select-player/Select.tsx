
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { IPlayer } from '../../interfaces/game';

type Props = {
  name: string;
  id?: string;
  label?: string;
  value: string | number;
  error?: boolean | undefined;
  onChange?: (e: any) => void;
  helperText?: string | boolean | undefined;
  items: IPlayer[] | [];
};



const SelectPlayer = (prob: Props) => {

  const { name, id, label, value, error = false, onChange, helperText, items, ...rest } = prob;

  return (
    <FormControl className="text-field">
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id={id}
        value={value}
        onChange={onChange}
        name={name}
        {...(error && { error: true })}
        {...rest}
      >
        {items.map((item) => {
          return (
            <MenuItem key={item.id} value={item.user}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>

      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default SelectPlayer;
