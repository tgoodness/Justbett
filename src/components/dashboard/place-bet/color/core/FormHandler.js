import { useState } from 'react';
import { useHistory, useParams } from 'react-router';

import emerald from '../../../../../lib/assets/stones/emerald.png';
import ruby from '../../../../../lib/assets/stones/ruby.png';
import silver from '../../../../../lib/assets/stones/silver.png';

import GREEN from '../../../../../lib/assets/colors/green.png';
import BLUE from '../../../../../lib/assets/colors/blue.png';
import RED from '../../../../../lib/assets/colors/red.png';

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

  const colors = [
    {
      colorId: 1,
      name: 'Green',
      icon: GREEN,
    },

    {
      colorId: 2,
      name: 'Blue',
      icon: BLUE,
    },

    {
      colorId: 3,
      name: 'Red',
      icon: RED,
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

  const [color, setTeam] = useState('');
  const handleColor = (e) => {
    // const selectedTeam = teams.find((team) => team.peerId === e.target.value);
    // const selectedPeerId = selectedTeam.peerId;

    setTeam(e.target.value);
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
      j_selectedGroup = pendingGroups.find((group) => group.groupId === parseInt(groupId));

      j_category = categories.find((category) => category.id === j_selectedGroup.categoryId);

      j_groupTypes = groupTypes.find((type) => type.name === j_selectedGroup.type);

      isJoinGroup = true;
    }
  }

  return [
    category,
    handleCategory,
    type,
    handleType,
    color,
    handleColor,
    isJoinGroup,
    j_category,
    j_groupTypes,
    categories,
    groupTypes,
    colors,
  ];
}

export default FormHandler;
