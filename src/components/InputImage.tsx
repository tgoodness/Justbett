import { TextFieldProps } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Info from '@mui/icons-material/Info';

export type Props = {
  name: string;
  value?: string | number;
  type?: string;
  id: string;
  onChange?: TextFieldProps['onChange'];
  label: string;
  error?: boolean | undefined;
  helperText?: string | boolean | undefined;
  icon: string;
  disabled?: boolean;
  className?: string;
};

const Input = (props: Props) => {
  const {
    name,
    value,
    type='text',
    id,
    onChange,
    label,
    error = null,
    helperText,
    icon,
    disabled = false,
  } = props;

  return (
    <FormControl variant="outlined" className="text-field">
      <InputLabel htmlFor="outlined-adornment-password ">{label}</InputLabel>
      <OutlinedInput
        name={name}
        type={type}
        value={value}
        label={label}
        id={id}
        disabled={disabled}
        {...(error && { error: true })}
        onChange={onChange}
        autoComplete="off"
        labelWidth={70}
        endAdornment={
          <InputAdornment position="end">
            <img src={icon} alt="Image Addon" width="25" />
          </InputAdornment>
        }
      />
      <FormHelperText className="text-danger">
        {error && <Info style={{ fontSize: '15px' }} />} {helperText}
      </FormHelperText>
    </FormControl>
  );
};

export default Input;
