import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import util from '../service/utils';

export default function SimpleSelect (prob) {
	const {
		name,
		value,
		error = null,
		onChange,
		helperText,
		items,
	} = prob;

	return (
		<FormControl className="text-field">
			<InputLabel id="bank-standard">Select Bank</InputLabel>
			<Select
				labelId="bank-standard"
				id="bank-standard"
				value={ value }
				onChange={ onChange }
				name={ name }
				{ ...(error && { error: true }) }>
				{ items.map((item) => {
					return (
						<MenuItem
							key={ util.randomNumber() + item.bankCode }
							value={ item.bankCode }>
							{ item.bankName }
						</MenuItem>
					);
				}) }
			</Select>

			<FormHelperText>{ helperText }</FormHelperText>
		</FormControl>
	);
}
