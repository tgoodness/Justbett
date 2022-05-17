import { Link } from 'react-router-dom';
import { PlusSquareOutlined, BankOutlined, ShoppingOutlined } from '@ant-design/icons';
import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';
import GameItemTemplate from './GameItemTemplate';
import FiatItemTemplate from './FiatItemTemplate';
import { IMAGES } from '../../../constant';
import '../../../style/dashboard/dashboard.scss';

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

          <div className="activities">
            <div className="activities-header">
              <h5>Recent History</h5>
              <h6>
                <Link to="/activity">More</Link>
              </h6>
            </div>

            {activities.length === 0 ? (
              <h6>Empty State</h6>
            ) : (
              activities.map((item: any, index) => {
                return item.type === 'fiat' ? (
                  <FiatItemTemplate item={item} key={index} />
                ) : (
                  <GameItemTemplate item={item} key={index} />
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
