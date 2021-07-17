import React from 'react';

import Pageview from '../../../../lib/layout/dashboard/Pageview';
import SelectCategory from '../../../../lib/control/SelectCategory';
import SelectType from '../../../../lib/control/SelectType';
import SelectColor from '../../../../lib/control/SelectColor';
import JoinGameTypeInput from '../../../../lib/control/JoinGameTypeInput';
import JoinGameTypeCategory from '../../../../lib/control/JoinGameCategoryInput';
import InputImage from '../../../../lib/control/InputImage';
import TagsInput from '../../../../lib/control/tags-input/TagsInput';

import ConfirmPlaceBet from './Confirm';
import modalHandler from './core/ModalHandler';
import formHandler from './core/FormHandler';
import tagsInputHandler from '../../../../lib/control/tags-input/LogicHandler';


import '../../../../lib/style/dashboard/place-bet-color.scss';
import NGN from '../../../../lib/assets/dashboard/ngn.png';

function PlaceBet () {

	const [
		category,
		handleCategory,
		type,
		handleType,
		amount,
		handleAmount,
		color,
		handleColor,
		isJoinGroup,
		j_category,
		j_groupTypes,
		categories,
		groupTypes,
		colors,
	] = formHandler();

	const [
		tags,
		delimiters,
		handleDelete,
		handleAddition,
		handleDrag,
	] = tagsInputHandler();

	const [ visible, showModal, handleCancel ] = modalHandler();

	//Place bet
	//	console.log(category, type, team, prediction, amount,invite);

	//Join bet
	// if(isJoinGroup)
	// console.log(j_category.users, j_groupTypes.id,team,prediction);
	
	return (
		<Pageview title="Place Bet" data-aos="flip-left">
			<div className="place-bet-color">

				<div className="page-background">
					<div>
						<h5>Bet & Win Big</h5>
						<h6>Enjoy the game, happy friendship</h6>
					</div>
				</div>


				{ isJoinGroup ? (
					<JoinGameTypeCategory value={ j_category.label } />
				) : (
					<SelectCategory
						label="Category"
						value={ category }
						onChange={ handleCategory }
						items={ categories }
					/>
				) }

				{ isJoinGroup ? (
					<JoinGameTypeInput
						value={ j_groupTypes.name }
						icon={ j_groupTypes.icon }
					/>
				) : category === '-' ? (
					<InputImage
						label="Amount"
						icon={ NGN }
						value={ amount }
						onChange={ handleAmount }
					/>
				) : (
					<SelectType
						label="Type"
						value={ type }
						onChange={ handleType }
						items={ groupTypes }
					/>
				) }

				<SelectColor
					label="Select Color"
					value={ color }
					onChange={ handleColor }
					items={ colors }
				/>


				{ category === '-' && !isJoinGroup ? (
					<div className="mt-3">
						<TagsInput
							tags={ tags }
							delimiters={ delimiters }
							handleDelete={ handleDelete }
							handleAddition={ handleAddition }
							handleDrag={ handleDrag }
						/>
					</div>
				) : null }



				<div className="mt-4">
					<button className="btn btn-block btn-black" onClick={ showModal }>
						Place Bet
					</button>
				</div>
			</div>


			<ConfirmPlaceBet
				visible={ visible }
				handleCancel={ handleCancel }
			/>
		</Pageview>
	);
}

export default PlaceBet;
