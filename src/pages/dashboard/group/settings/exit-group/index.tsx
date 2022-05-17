import { Modal } from 'antd';
import '../../../../../style/dashboard/group/exit-group.scss';

type Props = {
  visible: boolean;
  handleCancel: () => void;
};

function ExitGroup(props: Props) {
  const { visible, handleCancel } = props;

  return (
    <Modal
      visible={visible}
      onCancel={handleCancel}
      footer={false}
      closable={false}
      centered={true}
      maskClosable={false}
    >
      <div className="exit-group">
        <h5>Confirm</h5>
        <h6>Exit this group ?</h6>

        <div className="btn-wrapper">
          <span onClick={handleCancel}>CANCEL</span>
          <span>YES</span>
        </div>
      </div>
    </Modal>
  );
}

export default ExitGroup;
