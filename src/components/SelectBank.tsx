import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@mui/material/Select';

type Bank = {
  bankCode: number;
  bankName: string;
};

type Props = {
  name: string;
  id?: string;
  label?: string;
  value: string | number;
  error?: boolean | undefined;
  onChange?: () => void;
  helperText?: string | boolean | undefined;
  items: Bank[] | [];
};

export default function BasicSelect(props: Props) {
  const { name, id, label, value, error = false, onChange, helperText, items, ...rest } = props;

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
        {items.map((item, i) => {
          return (
            <MenuItem key={i} value={item.bankName}>
              {item.bankName}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
