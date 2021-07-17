import React from 'react';
import './style.scss';
import { WithContext as ReactTags } from 'react-tag-input';


function InpuTags (props) {
	const { tags, delimiters, handleDelete, handleAddition, handleDrag } = props;

	return (
		<div>
			<ReactTags
				tags={ tags }
				delimiters={ delimiters }
				handleDelete={ handleDelete }
				handleAddition={ handleAddition }
				handleDrag={ handleDrag }
			/>
		</div>
	);
}

export default InpuTags;
