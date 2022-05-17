import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export type IColor = { id: string; name: string; icon: string };

type Props = {
  name: string;
  id?: string;
  label?: string;
  value: string | number;
  error?: boolean | undefined;
  onChange?: (e: any) => void;
  helperText?: string | boolean | undefined;
    items: IColor[] | [];
};

const SelectColor = (props: Props) => {
  const { name, id, label, value, error = false, onChange, helperText, items } = props;
  return (
    <FormControl className="text-field">
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id={id}
        value={value}
        onChange={onChange}
        name={name}
        label={label}
        {...(error && { error: true })}
      >
        {items.map((item) => {
          return (
            <MenuItem key={item.id} value={item.id}>
              <img src={item.icon} alt="Color Logo" width="15" className="mr-2" />
              {item.name}
            </MenuItem>
          );
        })}
      </Select>

      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default SelectColor;
