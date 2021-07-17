import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import util from '../../lib/service/utils';

export default function Country (prob) {
	const { value, error = null, onChange, helperText, items } = prob;

	return (
		<FormControl className="text-field">
			<InputLabel id="country-label">Country</InputLabel>
			<Select
				labelId="country-label"
				id="country-helper"
				value={ value }
				onChange={ onChange }
				{ ...(error && { error: true }) }>
				{ items.map((item) => {
					return (
						<MenuItem key={ util.randomNumber() + item.name } value={ item.name }>
							<img
								src={ item.icon }
								alt="Country Logo"
								width="15"
								className="mr-2"
							/>
							<span>{ item.name }</span>
						</MenuItem>
					);
				}) }
			</Select>

			<FormHelperText>{ helperText }</FormHelperText>
		</FormControl>
	);
}
