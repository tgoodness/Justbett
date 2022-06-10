import { IFiat } from './types';
import './style.scss';
function FiatItem(props: IFiat) {
  const {
    item: { date, data },
  } = props;

  return (
    <div className="item">
      <div className="icon-wrapper">
        {data.icon}
        <div>
          <h5>{data.type}</h5>
          <h6>{date}</h6>
        </div>
      </div>
      <div className="amount">
        <h5>N{data.amount}</h5>
      </div>
    </div>
  );
}

export default FiatItem;
