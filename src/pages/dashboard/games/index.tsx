import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';
import Item from './Item';
import { IMAGES } from '../../../constant';
import './style.scss';

const Games = () => {
  const games = [
    {
      icon: IMAGES.soccer,
      name: 'soccer',
    },
    {
      icon: IMAGES.color,
      name: 'color',
    },
    {
      icon: IMAGES.pool,
      name: 'pool',
    },
  ];

  return (
    <>
      <Header title="Games">
        <h5>Games</h5>
      </Header>
      <Pageview>
        <div className="games-page">
          <div className="games">
            {games.map((item, i) => {
              return <Item key={i} data={item} />;
            })}
          </div>
        </div>
      </Pageview>
    </>
  );
};

export default Games;
