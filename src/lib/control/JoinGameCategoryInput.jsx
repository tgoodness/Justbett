import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Input } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Info from "@material-ui/icons/Info";

export default function JoinGameTypeInput(props) {
	const {
		value,
	} = props;

	return (
		<FormControl className="text-field">
			<InputLabel htmlFor="join-game-category">Category</InputLabel>
			<Input
				type="text"
				value={value}
				label="Category"
				id="join-game-category"
				name="cetegory"
				disabled={true}
			/>
		</FormControl>
	);
}
