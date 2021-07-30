import { useState } from 'react';
import { useHistory, useParams } from 'react-router';

import emerald from '../../../../../lib/assets/stones/emerald.png';
import ruby from '../../../../../lib/assets/stones/ruby.png';
import silver from '../../../../../lib/assets/stones/silver.png';

import CHE from '../../../../../lib/assets/clubes/CHE.png';
import MAN from '../../../../../lib/assets/clubes/MAN.png';
import ARS from '../../../../../lib/assets/clubes/ARS.png';
import BAR from '../../../../../lib/assets/clubes/BAR.png';
import LIV from '../../../../../lib/assets/clubes/LIV.png';
import BAY from '../../../../../lib/assets/clubes/BAY.png';

function FormHandler() {
	const categories = [
		{ id: 3, label: '3 Users', users: 3 },
		{ id: 5, label: '5 Users', users: 5 },
		{ id: 10, label: 'Play With Friends', users: 'group' },
	];

	const groupTypes = [
		{
			id: 1,
			name: 'Emerald',
			amount: 1000,
			icon: emerald,
		},

		{
			id: 2,
			name: 'Ruby',
			amount: 500,
			icon: ruby,
		},
		{
			id: 3,
			name: 'Silver',
			amount: 1000,
			icon: silver,
		},
	];

	const teams = [
		{
			peerId: 1,
			teamA: {
				teamId: 1,
				name: 'CHE',
				icon: CHE,
			},
			teamB: {
				teamId: 2,
				name: 'MAN',
				icon: MAN,
			},
		},

		{
			peerId: 2,
			teamA: {
				teamId: 1,
				name: 'ARS',
				icon: ARS,
			},
			teamB: {
				teamId: 2,
				name: 'BAR',
				icon: BAR,
			},
		},

		{
			peerId: 3,
			teamA: {
				teamId: 1,
				name: 'LIV',
				icon: LIV,
			},
			teamB: {
				teamId: 2,
				name: 'BAY',
				icon: BAY,
			},
		},
	];

	const pendingGroups = [
		{
			groupId: 1,
			categoryId: 3,
			type: 'Emerald',
			amount: 1000,
		},
		{
			groupId: 2,
			categoryId: 5,
			type: 'Silver',
			amount: 500,
		},
		{
			groupId: 3,
			categoryId: 3,
			type: 'Ruby',
			amount: 200,
		},
	];

	

	const [category, setCategory] = useState('');
	const handleCategory = (e) => {
		setCategory(e.target.value);
	};

	const [type, setType] = useState('');
	const handleType = (e) => {
		setType(e.target.value);
	};



	const [peerTeams, setPeerTeams] = useState({});
	const [team, setTeam] = useState('');
	const handleTeam = (e) => {
		// const selectedTeam = teams.find((team) => team.peerId === e.target.value);
		// const selectedPeerId = selectedTeam.peerId;

		const selectedPeerTeams = teams.find(
			(peer) => peer.peerId === e.target.value
		);
		setTeam(e.target.value);
		setPeerTeams(selectedPeerTeams);
	};



	// Join game logic
	const { groupId } = useParams();
	const history = useHistory();

	let j_selectedGroup;
	let j_category;
	let j_groupTypes;
	let isJoinGroup = false;

	if (groupId !== undefined) {
		const isValidGroupId = pendingGroups.find((g) => g.groupId === parseInt(groupId));
		if (isValidGroupId === undefined) {
			history.goBack();
		} else {
			j_selectedGroup = pendingGroups.find(
				(group) => group.groupId === parseInt(groupId)
			);
			
			j_category = categories.find(
				(category) => category.id === j_selectedGroup.categoryId
			);

			j_groupTypes = groupTypes.find(
				(type) => type.name === j_selectedGroup.type
			);

			isJoinGroup = true;
		}

		
	}

	
	return [
		category,
		handleCategory,
		type,
		handleType,
		team,
		handleTeam,
		isJoinGroup,
		j_category,
		j_groupTypes,
		categories,
		groupTypes,
		teams,
		peerTeams,
	];
}

export default FormHandler;
