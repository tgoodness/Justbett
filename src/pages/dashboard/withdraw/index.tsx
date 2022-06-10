import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';
import InputImage from '../../../components/InputImage';
import Input from '../../../components/Input';
import Button from '../../../components/buttons/TextButton';
import './style.scss';
import { IMAGES } from '../../../constant';

const Withdraw = () => {
  return (
    <>
      <Header title="Withdraw">
        <h5>Withdraw</h5>
        <Button loading={false} label="Next" />
      </Header>

      <Pageview>
        <div className="withdraw">
          <div className="account-balance">
            <div>
              <h5>N24,0000</h5>
              <h6>Current Balance</h6>
            </div>

            <div>
              <img src={IMAGES.ripple} alt="Nigeria Logo" width="80" />
              <h5>Edit Bank</h5>
            </div>
          </div>

          <InputImage
            // value={amount.value}
            // onChange={onChangeAmount}
            // helperText={amount.helperText}
            // error={amount.error}
            id="amount"
            name="amount"
            label="Amount"
            icon={IMAGES.ngn}
          />

          <Input value="" type="number" id="pin" name="pin" label="Pin" />
        </div>
      </Pageview>
    </>
  );
};

export default Withdraw;
