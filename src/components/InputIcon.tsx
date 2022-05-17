import React from 'react';
import { Input, TextFieldProps } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Info from '@material-ui/icons/Info';

type Props = {
  name: string;
  id?: string;
  label?: string;
  value: string | number;
  error?: boolean | undefined;
  type?: string;
  onChange?: TextFieldProps['onChange'];
  helperText?: string | boolean | undefined;
  disabled?: boolean;
  icon: React.ReactElement;
};

const InputIcon = (props: Props): JSX.Element => {
  const {
    id,
    name,
    label,
    value,
    error = false,
    type,
    onChange,
    helperText,
    disabled = false,
    icon,
  } = props;

  return (
    <FormControl className="text-field">
      <InputLabel htmlFor="demo-simple-select-helper-label">{label}</InputLabel>
      <Input
        type={type}
        value={value}
        id={id}
        name={name}
        disabled={disabled}
        {...(error && { error: true })}
        onChange={onChange}
        endAdornment={icon}
      />
      <FormHelperText className="text-danger">
        {error && <Info style={{ fontSize: '15px' }} />} {helperText}
      </FormHelperText>
    </FormControl>
  );
};

export default InputIcon;
