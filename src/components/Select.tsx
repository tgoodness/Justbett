import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@mui/material/Select';
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

const SelectComponent = (prob: Props) => {
  const { name, id, label, value, error = false, onChange, helperText, items, ...rest } = prob;

  return (
    <FormControl className="text-field">
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id={id}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
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
