import { useState } from 'react';
import { ITeam } from '../../../../../interfaces/game';

function FormHandler(teams: Array<ITeam>) {
  const [player, setPlayer] = useState('');
  const handlePlayer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayer(e.target.value);
  };

  const [category, setCategory] = useState('');
  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const [selectedTeam, setSelectedTeam] = useState<ITeam>();
  const [team, setTeam] = useState('');
  
  const handleTeam = (e: React.ChangeEvent<HTMLInputElement>) => {
    const team = teams.find((p) => p.peerId === parseInt(e.target.value));
    setTeam(e.target.value);
    setSelectedTeam(team);
  };

  
  return {
    player,
    handlePlayer,
    category,
    handleCategory,
    team,
    handleTeam,
    selectedTeam,
  };
}

export default FormHandler;
