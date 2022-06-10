import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';
import './style.scss';

function AddMoney() {
  return (
    <>
      <Header title="Add Money">
        <h5>Add Money</h5>
      </Header>
      <Pageview>
        <div className="add-money">
          <Link to="/add-money/bank-transfer">
            <div>
              <h5>
                <Icon icon="ant-design:bank-outlined" />
                <span> Bank Transfer</span>
              </h5>
              <span></span>
            </div>
          </Link>

          <Link to="/add-money/card">
            <div>
              <h5>
                <Icon icon="icon-park-outline:bank-transfer" />
                <span>Card</span>
              </h5>
              <span></span>
            </div>
          </Link>
        </div>
      </Pageview>
    </>
  );
}

export default AddMoney;
