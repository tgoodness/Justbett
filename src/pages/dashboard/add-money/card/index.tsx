import { IMAGES } from '../../../../constant';
import Pageview from '../../../../core-ui/dashboard/Pageview';
import Header from '../../../../core-ui/dashboard/Header';
import InputImage from '../../../../components/InputImage';
import formHandler from './core/formHandler';
import Button from '../../../../components/buttons/TextButton';
import './style.scss';

function Card() {
  const { amount, onChangeAmount } = formHandler();

  return (
    <>
      <Header title="Card" isImage={false} isBack={true}>
        <h5>Card</h5>
        <Button label="Next" />
      </Header>
      <Pageview>
        <div className="fund-with-card">
          <div className="wallet-details">
            <div>
              <h5>N24,0000</h5>
              <h6>Current Balance</h6>
            </div>

            <div>
              <img src={IMAGES.ripple} alt="Ripple" width="50" />
            </div>
          </div>
          <InputImage
            value={amount.value}
            onChange={onChangeAmount}
            helperText={amount.helperText}
            error={amount.error}
            id="amount"
            name="amount"
            label="Amount"
            icon={IMAGES.ngn}
          />
        </div>
      </Pageview>
    </>
  );
}

export default Card;
