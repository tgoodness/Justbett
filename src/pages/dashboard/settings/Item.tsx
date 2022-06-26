import { ChevronRight } from '@material-ui/icons';
import { Icon } from '@iconify/react';

type Props = {
  showModal?: (e: React.MouseEvent<HTMLElement>) => void;
  type: string;
  label: string;
};

const Icons = (type: string) => {
  switch (type) {
    case 'referrals':
      return <Icon icon="ci:user-plus" />;
    case 'profile':
      return <Icon icon="bytesize:user" />;
    case 'edit-bank':
      return <Icon icon="ant-design:bank-outlined" />;
    case 'change-pin':
      return <Icon icon="bx:bx-lock-alt" />;
    case 'change-password':
      return <Icon icon="gg:lock" />;
    case 'support':
      return <Icon icon="ant-design:customer-service-outlined" />;
  }
};

function Item(props: Props) {
  const { showModal, type, label } = props;

  return (
    <div className="item" onClick={showModal}>
      <span className={`${type}-icon`}>{Icons(type)}</span>
      <div>
        <h6>{label}</h6>
        <ChevronRight />
      </div>
    </div>
  );
}

export default Item;
