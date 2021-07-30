import React from 'react';
import { Input } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Info from '@material-ui/icons/Info';


export default function InputImage (props) {
	const {
		value,
		type,
		onChange,
		label,
		name,
		error = null,
		helperText,
		disabled = null,
		icon
	} = props;

	return (
    <FormControl className="text-field">
      <InputLabel htmlFor="demo-simple-select-helper-label">{label}</InputLabel>
      <Input
        type={type}
        value={value}
        label={label}
        id="demo-simple-select-helper-label"
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
}
