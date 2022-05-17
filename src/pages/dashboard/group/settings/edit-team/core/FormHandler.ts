import { useState } from 'react';
import { ITeam } from '../../../../../../interfaces/game';


function  FormHandler(teams: Array<ITeam>) {


  const [selectedTeam, setSelectedTeam] = useState<ITeam>();
  const [team, setTeam] = useState('');
  const handleTeam = (e: React.ChangeEvent<HTMLInputElement>) => {
   const team = teams.find((p) => p.peerId === parseInt(e.target.value));
    setTeam(e.target.value);
   setSelectedTeam(team);
  };

  return { team, handleTeam, selectedTeam };
}

export default FormHandler;
