import { Empty } from 'antd';
import { PlusSquareOutlined, BankOutlined, ShoppingOutlined } from '@ant-design/icons';
import { FilterListOutlined } from '@material-ui/icons';
import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';
import util from '../../../helpers/utils';
import '../../../style/dashboard/activities.scss';

const Activities = () => {
  const activities = [
    {
      type: 'DEPOSIT',
      amount: 500.0,
      date: '05-05-20',
      icon: <BankOutlined />,
    },

    {
      type: 'WITHDRAW',
      amount: 100.0,
      date: '05-03-20',
      icon: <ShoppingOutlined />,
    },
    {
      type: 'DEPOSIT',
      amount: 500.0,
      date: '05-05-20',
      icon: <BankOutlined />,
    },

    {
      type: 'CREDIT',
      amount: 500.0,
      date: '05-05-20',
      icon: <PlusSquareOutlined />,
    },
    {
      type: 'DEPOSIT',
      amount: 500.0,
      date: '05-05-20',
      icon: <BankOutlined />,
    },
    {
      type: 'CREDIT',
      amount: 500.0,
      date: '05-05-20',
      icon: <PlusSquareOutlined />,
    },
    {
      type: 'CREDIT',
      amount: 500.0,
      date: '05-05-20',
      icon: <PlusSquareOutlined />,
    },
    {
      type: 'CREDIT',
      amount: 500.0,
      date: '05-05-20',
      icon: <PlusSquareOutlined />,
    },
  ];

  return (
    <>
      <Header title="Activity">
        <h6>Activity</h6>
      </Header>
      <Pageview>
        <div className="activities">
          <div className="page-background">
            <h3>
              <FilterListOutlined />
            </h3>
            <div>
              <h5>Bet & Win Big</h5>
              <h6>Enjoy the game, happy friendship</h6>
            </div>
          </div>
          <div className="activities">
            {activities.length === 0 ? (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            ) : (
              activities.map((item) => {
                return (
                  <div className="activity" key={util.randomNumber + item.type}>
                    <div className="icon-wrapper">
                      {item.icon}
                      <div>
                        <h5>{item.type}</h5>
                        <h6>{item.date}</h6>
                      </div>
                    </div>
                    <h6>N{item.amount}</h6>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </Pageview>
    </>
  );
};

export default Activities;
