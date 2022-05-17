import { Modal } from 'antd';
import TagsInput from '../../../../../components/tags-input/TagsInput';
import InputImage from '../../../../../components/InputImage';
import tagsInputHandler from '../../../../../components/tags-input/LogicHandler';
import formHandler from './core/FormHandler';
import { IMAGES } from '../../../../../constant';
import '../../../../../style/dashboard/confirm-place-bet.scss';

type Props = { visible: boolean; handleCancel: () => void };
function Index(props: Props) {
  const { visible, handleCancel } = props;
  const { tags, delimiters, handleDelete, handleAddition, handleDrag } = tagsInputHandler();
  const { amount, handleAmount } = formHandler();

  return (
    <Modal
      visible={visible}
      onCancel={handleCancel}
      closable={false}
      footer={false}
      centered={true}
      maskClosable={false}
    >
      <div className="confirm-place-bet">
        <InputImage
          name="amount"
          label="Amount"
          icon={IMAGES.ngn}
          value={amount}
          onChange={handleAmount}
          className="mt-4"
        />
        <TagsInput
          tags={tags}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
        />

        <div className="section-three">
          <div className="row">
            <div className="col-6">
              <button className="btn btn-outlined-black btn-block" onClick={handleCancel}>
                Cancel
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-black btn-block">Confirm</button>
            </div>
          </div>
        </div>

        <div className="close-footer">
          <h6 onClick={handleCancel}>Close</h6>
        </div>
      </div>
    </Modal>
  );
}

export default Index;
