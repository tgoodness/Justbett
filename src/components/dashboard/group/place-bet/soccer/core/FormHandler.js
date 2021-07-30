import { useState } from 'react';

import CHE from '../../../../../../lib/assets/clubes/CHE.png';
import MAN from '../../../../../../lib/assets/clubes/MAN.png';
import ARS from '../../../../../../lib/assets/clubes/ARS.png';
import BAR from '../../../../../../lib/assets/clubes/BAR.png';
import LIV from '../../../../../../lib/assets/clubes/LIV.png';
import BAY from '../../../../../../lib/assets/clubes/BAY.png';

function FormHandler() {
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

  const [peerTeams, setPeerTeams] = useState({});
  const [team, setTeam] = useState('');
  const handleTeam = (e) => {
    const selectedPeerTeams = teams.find((peer) => peer.peerId === e.target.value);
    setTeam(e.target.value);
    setPeerTeams(selectedPeerTeams);
  };

  return [team, handleTeam, teams, peerTeams];
}

export default FormHandler;
