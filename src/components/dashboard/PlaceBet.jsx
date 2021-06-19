import React, { useState } from "react";
import { CheckOutlined, InfoCircleFilled } from "@ant-design/icons";

import Pageview from "../../lib/layout/dashboard/Pageview";
import SelectCategory from "../../lib/control/SelectCategory";
import SelectType from "../../lib/control/SelectType";
import SelectTeam from "../../lib/control/SelectTeam";
import JoinGameTypeInput from "../../lib/control/JoinGameTypeInput";
import JoinGameTypeCategory from "../../lib/control/JoinGameCategoryInput";
import InputImage from "../../lib/control/InputImage";
import "../../lib/style/dashboard/place-bet.scss";
import NGN from "../../lib/assets/dashboard/ngn.png";

import TagsInput from "../../lib/control/tags-input/TagsInput";
import ConfirmPlaceBet from "./others/ConfirmPlaceBet";

import logicHandler from "../../lib/core/dashboard/place-bet/LogicHandler";
import modalHandler from "../../lib/core/dashboard/place-bet/ModalHandler";
import formHandler from "../../lib/core/dashboard/place-bet/FormHandler";
import tagsInputHandler from "../../lib/control/tags-input/LogicHandler";
import misc from "../../lib/service/misc";

function PlaceBet() {
	const [prediction, teamA, handleTeamA, teamB, handleTeamB] = logicHandler();

	const [
		category,
		handleCategory,
		type,
		handleType,
		amount,
		handleAmount,
		team,
		handleTeam,
		isJoinGroup,
		j_category,
		j_groupTypes,
		categories,
		groupTypes,
		teams,
		peerTeams,
	] = formHandler();

	const [
		tags,
		delimiters,
		handleDelete,
		handleAddition,
		handleDrag,
	] = tagsInputHandler();

	const [open, showDialog, handleClose] = modalHandler();

	//Place bet
	//	console.log(category, type, team, prediction, amount,invite);

	//Join bet
	// if(isJoinGroup)
	// console.log(j_category.users, j_groupTypes.id,team,prediction);

	return (
		<Pageview title="Place Bet" data-aos="flip-left">
			<div className="place-bet">
				{isJoinGroup ? (
					<JoinGameTypeCategory value={j_category.label} />
				) : (
					<SelectCategory
						label="Category"
						value={category}
						onChange={handleCategory}
						items={categories}
					/>
				)}

				{isJoinGroup ? (
					<JoinGameTypeInput
						value={j_groupTypes.name}
						icon={j_groupTypes.icon}
					/>
				) : category === "-" ? (
					<InputImage
						label="Amount"
						icon={NGN}
						value={amount}
						onChange={handleAmount}
					/>
				) : (
					<SelectType
						label="Type"
						value={type}
						onChange={handleType}
						items={groupTypes}
					/>
				)}

				<SelectTeam
					label="Select Team"
					value={team}
					onChange={handleTeam}
					items={teams}
				/>

				{team && (
					<div className="prediction">
						<label>What's your prediction? </label>
						<div className="check-wrapper">
							<div className="teamA" id={1}>
								<h6>{peerTeams.teamA.name} wins</h6>
								<CheckOutlined
									className={teamA.isChecked ? "checked" : "checked unchecked"}
									onClick={handleTeamA}
								/>
							</div>
							<div className="teamB" id={2}>
								<h6>{peerTeams.teamB.name} wins</h6>
								<CheckOutlined
									className={teamB.isChecked ? "checked" : "checked unchecked"}
									onClick={handleTeamB}
								/>
							</div>
						</div>
					</div>
				)}

				{category === "-" && !isJoinGroup ? (
					<div className="mt-3">
						<TagsInput
							tags={tags}
							delimiters={delimiters}
							handleDelete={handleDelete}
							handleAddition={handleAddition}
							handleDrag={handleDrag}
						/>
					</div>
				) : null}

				{category !== "" || isJoinGroup ? (
					<label className="win-info">
						<InfoCircleFilled />
						{category === "-"
							? misc.numberOfWinner(tags.length)
							: misc.numberOfWinner(isJoinGroup ? j_category.id : category)}
					</label>
				) : null}

				<div className="mt-2">
					<button className="btn btn-block btn-black" onClick={showDialog}>
						Place Bet
					</button>
				</div>

				<ConfirmPlaceBet
					title="Confirm"
					open={open}
					handleClose={handleClose}
				/>
			</div>
		</Pageview>
	);
}

export default PlaceBet;
