import { Modal } from 'antd';
import './referees.scss';

type Props = { visible: boolean; handleCancel: () => void };
function Referees(props: Props) {
  const { visible, handleCancel } = props;
  return (
    <Modal
      title="Invites"
      className="invites"
      footer={false}
      visible={visible}
      onCancel={handleCancel}
    >
      <h6>Goodness</h6>
      <h6>Ralph</h6>
      <h6>Odion</h6>

      <h5>
        <span onClick={handleCancel}>Close</span>
      </h5>
    </Modal>
  );
}

export default Referees;
