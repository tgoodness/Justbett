import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import util from '../../lib/service/utils';

export default function SimpleSelect (prob) {
	const {
		name,
		label,
		value,
		error = null,
		onChange,
		helperText,
		items,
	} = prob;

	return (
		<FormControl className="text-field">
			<InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
			<Select
				labelId="demo-simple-select-helper-label"
				id="demo-simple-select-helper"
				value={ value }
				onChange={ onChange }
				name={ name }
				label={ label }

				{ ...(error && { error: true }) }>
				{ items.map((item) => {
					return (
						<MenuItem
							key={ util.randomNumber() + item.peerId }
							value={ item.peerId }>
							<img
								src={ item.teamA.icon }
								alt="Team A Logo"
								width="15"
								className="mr-2"
							/>
							{ item.teamA.name }
							<span className="mr-3 ml-3">-</span>
							<img
								src={ item.teamB.icon }
								alt="Team B Logo"
								width="15"
								className="mr-2"
							/>
							{ item.teamB.name }
						</MenuItem>
					);
				}) }
			</Select>

			<FormHelperText>{ helperText }</FormHelperText>
		</FormControl>
	);
}
