import { TextFieldProps } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputField from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Info from '@material-ui/icons/Info';

type Props = {
  name: string;
  value: string | number;
  type: boolean;
  id: string;
  onChange?: TextFieldProps['onChange'];
  onClick: () => void;
  label: string;
  error: boolean | undefined;
  helperText: string | boolean | undefined;
  onMouseDown: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
};

const Input = (props: Props): JSX.Element => {
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
    onClick,
    disabled = false,
  } = props;

  return (
    <FormControl className="text-field">
      <InputLabel htmlFor="outlined-adornment-password ">{label}</InputLabel>
      <InputField
        type={type ? 'text' : 'password'}
        value={value}
        name={name}
        id={id}
        disabled={disabled}
        {...(error && { error: true })}
        onChange={onChange}
        autoComplete="off"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onClick}
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
