import { Modal } from 'antd';

import TagsInput from '../../../../../components/tags-input/TagsInput';
import InputImage from '../../../../../components/InputImage';

import tagsInputHandler from '../../../../../components/tags-input/LogicHandler';
import formHandler from './core/FormHandler';
import { IMAGES } from '../../../../../constant';
import '../../../../../style/dashboard/confirm-place-bet.scss';


type Props = { visible: boolean; handleCancel: () => void };
function AddFriends(props: Props) {
  const { visible, handleCancel } = props;
  const { tags, delimiters, handleDelete, handleAddition, handleDrag } = tagsInputHandler();
  const { amount, handleAmount } = formHandler();

  return (
    <Modal
      visible={visible}
      onCancel={handleCancel}
      title="Invite friends"
      footer={false}
      centered={true}
      maskClosable={false}
    >
      <div className="confirm-place-bet">
        <InputImage
          name="amount"
          id="amount"
          label="Amount"
          className="mt-4"
          value={amount}
          onChange={handleAmount}
          icon={IMAGES.ngn}
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
              <button className="btn btn-black btn-block">Create</button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default AddFriends;
