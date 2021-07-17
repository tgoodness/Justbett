import React from 'react';

import { Input } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


export default function JoinGameTypeInput (props) {
	const {
		value,
	} = props;

	return (
		<FormControl className="text-field">
			<InputLabel htmlFor="join-game-category">Category</InputLabel>
			<Input
				type="text"
				value={ value }
				label="Category"
				id="join-game-category"
				name="cetegory"
				disabled={ true }
			/>
		</FormControl>
	);
}
