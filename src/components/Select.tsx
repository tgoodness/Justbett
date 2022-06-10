import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import util from '../helpers/utils';

type Props = {
  name: string;
  id?: string;
  label?: string;
  value: string | number;
  error?: boolean | undefined;
  onChange?: () => void;
  helperText?: string | boolean | undefined;
  items: string[];
};

const SelectComponent = (prob: Props): JSX.Element => {
  const { name, id, label, value, error = false, onChange, helperText, items, ...rest } = prob;

  return (
    <FormControl className="text-field" variant="outlined">
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
            <MenuItem key={util.randomNumber() + item} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>

      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default SelectComponent;
