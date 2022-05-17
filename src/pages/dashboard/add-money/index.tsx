import { Link } from 'react-router-dom';
import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';
import '../../../style/dashboard/add-money/index.scss';

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
              <h5>Bank Transfer</h5>
              <span></span>
            </div>
          </Link>

          <Link to="/add-money/bank-transfer">
            <div>
              <h5>Card</h5>
              <span></span>
            </div>
          </Link>
        </div>
      </Pageview>
    </>
  );
}

export default AddMoney;
