import { useState } from 'react';
import { Icon } from '@iconify/react';

type Props = {
  icon: string;
  name: string;
  won: boolean;
  predicted: boolean;
};

type Item = { item: Props };

function ColorItem(props: Item) {
  const { icon, name, won, predicted } = props.item;

  const [more, setMore] = useState(false);
  const showMore = () => {
    setMore(!more);
  };

  return (
    <div className="color-item" onClick={showMore}>
      <div className="result">
        <div>
          <img src={icon} alt="Color" width="25" />
          {name}
        </div>

        <span>-</span>
        <span className={won ? 'won' : 'lose'}>{won ? 'Won' : 'Lose'}</span>
      </div>
      {more && predicted && (
        <h5>
          <Icon icon="bytesize:user" />
          <span>Goodness</span>
          <Icon icon="bytesize:location" />
          <span>Lekki, Lagos</span>
        </h5>
      )}
    </div>
  );
}

export default ColorItem;
