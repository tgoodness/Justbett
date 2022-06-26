import { Link } from 'react-router-dom';
import { PlusSquareOutlined, BankOutlined, ShoppingOutlined } from '@ant-design/icons';
import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';
import GameItem from '../game-history/GameItem';
import FiatItem from '../game-history/FiatItem';
import { IMAGES } from '../../../constant';
import './style.scss';

const Dashboard = () => {
  const activities = [
    {
      id: '1',
      type: 'game',
      date: '05-05-20',
      data: {
        remaining: 2,
        status: 'Pending',
        category: {
          name: 'Emerald',
          amount: 1000,
          icon: IMAGES.emerald,
        },
      },
    },

    {
      id: '2',
      type: 'fiat',
      date: '05-03-20',
      data: { amount: 100, type: 'Withdraw', icon: <ShoppingOutlined /> },
    },

    {
      id: '3',
      type: 'fiat',
      date: '05-05-20',
      data: { amount: 100, type: 'Credit', icon: <PlusSquareOutlined /> },
    },
    {
      id: '4',
      type: 'fiat',
      date: '05-05-20',
      data: { amount: 100, type: 'Deposit', icon: <BankOutlined /> },
    },
  ];

  return (
    <>
      <Header title="Dashboard">
        <h5>Dashboard</h5>
      </Header>
      <Pageview>
        <div className="dashboard">
          <div className="wallet-wrapper">
            <div className="balance">
              <h5>24,000.00</h5>
              <h6>Current Balance</h6>
            </div>

            <div className="navigation-links">
              <h6>
                <Link to="/withdraw">
                  <span>Add Money</span>
                </Link>
              </h6>
              <h6>
                <Link to="/withdraw">
                  <span>Withdraw</span>
                </Link>
              </h6>
            </div>
          </div>

          <div className="history">
            <div className="heading">
              <h5>Recent History</h5>
              <h6>
                <Link to="/history">More</Link>
              </h6>
            </div>

            {activities.length === 0 ? (
              <h6>Empty State</h6>
            ) : (
              activities.map((item: any, index) => {
                return item.type === 'fiat' ? (
                  <FiatItem item={item} key={index} />
                ) : (
                  <GameItem item={item} key={index} />
                );
              })
            )}
          </div>
        </div>
      </Pageview>
    </>
  );
};

export default Dashboard;
