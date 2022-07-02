import { PlusSquareOutlined, BankOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';
import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';

import GameItem from './GameItem';
import FiatItem from './FiatItem';
import { IMAGES } from '../../../constant';
import './style.scss';

const History = () => {
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
      <Header title="History" isImage={false}>
        <h5>History</h5>
        <Icon icon="akar-icons:filter" className="filter-icon" />
      </Header>
      <Pageview>
        <div className="history">
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
      </Pageview>
    </>
  );
};

export default History;
