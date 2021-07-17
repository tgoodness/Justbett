import React from 'react';
import { Input } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


export default function InputImage (props) {
	const {
		value,
		icon,
	} = props;

	return (
		<FormControl className="text-field">
			<InputLabel htmlFor="join-game-type">Type</InputLabel>
			<Input
				type="text"
				value={ value }
				label="Type"
				id="join-game-type"
				name="type"
				disabled={ true }
				startAdornment={
					<img src={ icon } alt="Package Logo" width="15" className="mr-1" />
				}
				autoComplete="off"
			/>
		</FormControl>
	);
}
