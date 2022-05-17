import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';
import InputImage from '../../../components/InputImage';
import Input from '../../../components/InputFilled';
import '../../../style/dashboard/withdraw.scss';
import NGN from '../../../assets/dashboard/ngn.png';
import { IMAGES } from '../../../constant';

const Withdraw = () => {
  return (
    <>
      <Header title="Withdraw">
        <h6>Withdraw</h6>
      </Header>
      <Pageview>
        <div className="withdraw">
          <div className="existing-details">
            <div className="bank-details">
              <h5>TOBILOBA AKINYEMI O.</h5>
              <h6>3030034509 </h6>
              <h6>POLARIS BANK</h6>
            </div>

            <div className="account-balance">
              <img src={NGN} alt="Nigeria Logo" />
              <div>
                <h5>24,000.00</h5>
                <h6>Acct. Balance</h6>
              </div>
            </div>
          </div>

          <InputImage value="" id="amount" name="amount" label="Amount" icon={IMAGES.ngn} />
          <Input value="" id="pin" name="pin" label="Pin" />

          <div className="mt-4">
            <button className="btn btn-black  btn-block">Withdraw</button>
          </div>
        </div>
      </Pageview>
    </>
  );
};

export default Withdraw;
