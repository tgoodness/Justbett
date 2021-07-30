import { useState } from 'react';

import GREEN from '../../../../../../lib/assets/colors/green.png';
import BLUE from '../../../../../../lib/assets/colors/blue.png';
import RED from '../../../../../../lib/assets/colors/red.png';

function FormHandler() {
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

  const [color, setTeam] = useState('');
  const handleColor = (e) => {
    setTeam(e.target.value);
  };

  return [color, handleColor, colors];
}

export default FormHandler;
