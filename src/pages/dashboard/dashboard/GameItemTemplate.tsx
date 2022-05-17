
import { IGame } from './types';
function GameItemTemplate(props: IGame) {
  const {
    item: { date, data },
  } = props;

  return (
    <div className="activity">
      <div className="icon-wrapper">
        <img src={data.category.icon} alt="Category Icon" />
        <div>
          <h5>
            {data.category.name} <span className="remaining">{data.remaining}</span>
          </h5>
          <h6>{data.status}</h6>
        </div>
      </div>
      <div className="amount">
        <h5>N{data.category.amount}</h5>
        <h6>{date}</h6>
      </div>
    </div>
  );
}

export default GameItemTemplate;
