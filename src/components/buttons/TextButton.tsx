import { LoadingOutlined } from '@ant-design/icons';
import './style.scss';

type Props = {
  label: string;
  loading?: boolean;
  onClick?: () => void;
};

const Button = (probs: Props) => {
  const { label, loading = false, ...rest } = probs;
  return (
    <span {...(loading && { disabled: true })} {...rest} className="text-btn">
      {(loading && <LoadingOutlined />) || label}
    </span>
  );
};

export default Button;
