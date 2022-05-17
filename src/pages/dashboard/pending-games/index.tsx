import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { FilterListOutlined } from '@material-ui/icons';
import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';
import util from '../../../helpers/utils';
import misc from '../../../helpers/misc';
import '../../../style/dashboard/pending-games.scss';
import { IMAGES } from '../../../constant';

function GameHistory() {
  const gameHistory = [
    {
      groupId: 1,
      category: 3,
      name: 'Pearl',
      amount: 500.0,
      icon: IMAGES.pearl,
      winning: misc.winning('PENDING'),
      type: 'soccer',
      teamA: {
        icon: IMAGES.CHE,
        name: 'CHE',
        seleted: true,
      },
      teamB: {
        icon: IMAGES.MAN,
        name: 'MAN',
        seleted: false,
      },
    },
    {
      groupId: 2,
      category: 3,
      name: 'Diamond',
      amount: 1000,
      icon: IMAGES.diamond,
      winning: misc.winning('PENDING'),
      type: 'soccer',
      teamA: {
        icon: IMAGES.BAR,
        name: 'BAR',
        seleted: false,
      },
      teamB: {
        icon: IMAGES.ARS,
        name: 'ARS',
        seleted: true,
      },
    },
    {
      groupId: 3,
      category: 5,
      name: 'Silver',
      amount: 500.0,
      icon: IMAGES.silver,
      winning: misc.winning('PENDING'),
      type: 'soccer',
      teamA: {
        icon: IMAGES.CHE,
        name: 'CHE',
        seleted: true,
      },
      teamB: {
        icon: IMAGES.MAN,
        name: 'MAN',
        seleted: false,
      },
    },
    {
      groupId: 1,
      category: 3,
      name: 'Pearl',
      amount: 500.0,
      icon: IMAGES.pearl,
      winning: misc.winning('PENDING'),
      type: 'color',
      prediction: {
        icon: IMAGES.blue,
        name: 'Blue',
        seleted: true,
      },
    },
  ];

  return (
    <>
      <Header title="Pending Games">
        <h6>Ongoing Games</h6>
      </Header>
      <Pageview>
        <div className="pending-games">
          <div className="page-background">
            <h3>
              <FilterListOutlined />
            </h3>
            <div>
              <h5>Bet & Win Big</h5>
              <h6>Enjoy the game, happy friendship</h6>
            </div>
          </div>

          {gameHistory.map((item: any) => {
            return (
              <Link
                key={item.groupId}
                to={
                  item.winning.type !== 'pending'
                    ? `/game-details/${item.groupId}`
                    : '/pending-games'
                }
              >
                <div className="game" key={item.groupId}>
                  <div className="team-details">
                    {item.type === 'soccer' ? (
                      <div className="teams">
                        <div className={item.teamA.seleted ? 'team-name selected' : 'team-name'}>
                          <img src={item.teamA.icon} alt="TeamA Logo" width="20" height="20" />
                          <span>{item.teamA.name}</span>
                        </div>
                        <span className="ml-1 mr-1 separator">-</span>
                        <div className={item.teamB.seleted ? 'team-name selected' : 'team-name'}>
                          <img src={item.teamB.icon} alt="TeamB Logo" width="20" height="20" />
                          <span>{item.teamB.name}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="color-chosen">
                        <img src={item.prediction.icon} alt="Color Icon" width="20" height="20" />
                        <span>{item.prediction.name}</span>
                      </div>
                    )}
                    <h6>
                      N{util.numberFormat(item.amount)}{' '}
                      <span className={item.winning.type}>{item.winning.win}</span>
                    </h6>
                  </div>
                  <div className="package-details">
                    <div>
                      <h6>N{util.numberFormat(item.amount, 2)}</h6>
                      <h5>
                        <span className="mr-3">{item.name}</span>
                        <Badge badgeContent={item.category} color="secondary" />
                      </h5>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Pageview>
    </>
  );
}

export default GameHistory;
