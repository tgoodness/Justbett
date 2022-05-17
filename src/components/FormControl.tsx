import { TextFieldProps } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Info from '@mui/icons-material/Info';

export type Props = {
  name: string;
  value: string | number;
  type: boolean;
  id: string;
  onChange?: TextFieldProps['onChange'];
  label: string;
  error: boolean | undefined;
  helperText: string | boolean | undefined;
  onClick: () => void;
  onMouseDown: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
};

const Input = (props: Props) => {
  const {
    name,
    value,
    type,
    id,
    onChange,
    label,
    error = null,
    helperText,
    onMouseDown,
    disabled = false,
  } = props;

  return (
    <FormControl variant="outlined" className="text-field">
      <InputLabel htmlFor="outlined-adornment-password ">{label}</InputLabel>
      <OutlinedInput
        name={name}
        type={type ? 'text' : 'password'}
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
            <IconButton
              aria-label="toggle password visibility"
              onMouseDown={onMouseDown}
              edge="end"
              tabIndex="-1"
            >
              {type ? <Visibility /> : <VisibilityOff />}
            </IconButton>
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
