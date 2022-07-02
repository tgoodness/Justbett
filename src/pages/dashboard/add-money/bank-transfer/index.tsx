import { IMAGES } from '../../../../constant';
import Pageview from '../../../../core-ui/dashboard/Pageview';
import Header from '../../../../core-ui/dashboard/Header';
import Button from '../../../../components/buttons/Button';
import './style.scss';

function BankTransfer() {
  return (
    <>
      <Header title="Bank Transfer"  isBack={true}>
        <h5>Bank Transfer</h5>
      </Header>
      <Pageview>
        <div className="bank-transfer">
          <div className="wallet-details">
            <div>
              <h5>3030034509</h5>
              <h6>Tobiloba Akinyemi</h6>
            </div>

            <div>
              <img src={IMAGES.ripple} alt="Ripple" width="50" />
              <h6>KUDA BANK</h6>
            </div>
          </div>
          <h6 className="intruction">
            Hello Tobiloba, Kindly use the account details provided above to top up your wallet.
          </h6>

          <div className="mt-4">
            <Button className="btn btn-black  btn-block" label="Copy It" />
          </div>
        </div>
      </Pageview>
    </>
  );
}

export default BankTransfer;
