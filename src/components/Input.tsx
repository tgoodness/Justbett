import { TextFieldProps, TextField } from '@material-ui/core';
import Info from '@mui/icons-material/Info';

type Props = {
  name: string;
  id?: string;
  label?: string;
  placeholder?: string;
  value: string | number;
  error?: boolean | undefined;
  type?: string;
  onChange?: TextFieldProps['onChange'];
  helperText?: string | boolean | undefined;
  disabled?: boolean;
  row?: string | number;
};

const Input = (props: Props): JSX.Element => {
  const {
    name,
    id,
    label,
    value,
    placeholder,
    error = null,
    type = 'text',
    onChange,
    helperText = false,
    disabled = false,
    row = 'sm',
    ...rest
  } = props;

  return (
    <TextField
      className="text-field"
      variant="outlined"
      name={name}
      placeholder={placeholder}
      label={label}
      id={id}
      type={type}
      disabled={disabled}
      value={value}
      onChange={onChange}
      minRows={row}
      {...rest}
      {...(error && {
        error: true,
        helperText: (
          <span style={{ color: '#f93154' }}>
            <Info style={{ fontSize: '15px' }} />
            &nbsp;
            {helperText}
          </span>
        ),
      })}
    />
  );
};

export default Input;
