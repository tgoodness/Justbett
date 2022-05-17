import { useState } from 'react';

function LogicHandler() {
  const [prediction, setPrediction] = useState('');
  const [teamA, setTeamA] = useState({ isChecked: false, value: '' });
  const [teamB, setTeamB] = useState({ isChecked: false, value: '' });

  const handleTeamA = (e: React.MouseEvent<HTMLSpanElement>) => {
    const value = e.currentTarget.id;
    setTeamA({ isChecked: !teamA.isChecked, value: value });

    if (teamB.isChecked) {
      setTeamB({ isChecked: false, value: '' });
    }

    if (!teamA.isChecked) setPrediction(value);
    else setPrediction('');
  };

  const handleTeamB = (e: React.MouseEvent<HTMLSpanElement>) => {
    const value = e.currentTarget.id;
    setTeamB({ isChecked: !teamB.isChecked, value: value });

    if (teamA.isChecked) {
      setTeamA({ isChecked: false, value: '' });
    }

    if (!teamB.isChecked) setPrediction(value);
    else setPrediction('');
  };

  return { prediction, teamA, handleTeamA, teamB, handleTeamB };
}

export default LogicHandler;
