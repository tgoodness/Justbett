import { useState } from 'react';
import { Icon } from '@iconify/react';

type Team = { icon: string; name: string; goals: number; predicted: boolean };
type Props = {
  teamA: Team;
  teamB: Team;
  points: number;
  postion: string;
  username: string;
  location: string;
};

type Item = { item: Props };

function SoccerItem(props: Item) {
  const { teamA, teamB, points, postion, username, location } = props.item;
  const [more, setMore] = useState(false);
  const showMore = () => {
    setMore(!more);
  };

  return (
    <div className="soccer-item" onClick={showMore}>
      <div className="result">
        <div>
          <img src={teamA.icon} alt="Club Logo" width="25" />
          {teamA.name}
        </div>

        <div>
          <span className={teamA.predicted ? 'predicted' : ''}>5</span>
          <span>-</span>
          <span className={teamB.predicted ? 'predicted' : ''}>2</span>
        </div>

        <div>
          <img src={teamB.icon} alt="Club Logo" width="25" />
          {teamA.name}
        </div>
      </div>
      {more && (
        <>
          <h6>
            {points} Points ( {postion})
          </h6>
          <h5>
            <Icon icon="bytesize:user" />
            <span>{username}</span>
            <Icon icon="bytesize:location" />
            <span>{location}</span>
          </h5>
        </>
      )}
    </div>
  );
}

export default SoccerItem;
