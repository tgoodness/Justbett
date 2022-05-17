import { TextFieldProps, TextField } from '@material-ui/core';

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
  multiline?: boolean;
};

const Input = (props: Props): JSX.Element => {
  const {
    name,
    label,
    value,
    error = null,
    type,
    onChange,
    helperText,
    disabled = false,
    multiline = false,
    row = '',
    ...rest
  } = props;

  return (
    <TextField
      {...(disabled && { disabled: true })}
      className="text-field"
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: helperText })}
      {...(multiline && { multiline: true })}
      rows={row}
      {...rest}
    />
  );
};

export default Input;
