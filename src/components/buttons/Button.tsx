import './style.scss';
import { LoadingOutlined } from '@ant-design/icons';
type Props = {
  label: string;
  loading?: boolean;
  className: string;
  onClick?: () => void;
};

const Button = (probs: Props) => {
  const { label, loading = false, ...rest } = probs;
  return (
    <button type="submit" {...(loading && { disabled: true })} {...rest}>
      {(loading && (
        <span>
          <LoadingOutlined />
          &nbsp; Loading...
        </span>
      )) ||
        label}
    </button>
  );
};

export default Button;
