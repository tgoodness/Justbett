import { Modal } from 'antd';

import TagsInput from '../../../../../components/tags-input/TagsInput';
import tagsInputHandler from '../../../../../components/tags-input/LogicHandler';
import '../../../../../style/dashboard/group/invite-friends.scss';

type Props = {
  visible: boolean;
  handleCancel: () => void;
};

function InviteFriends(props: Props) {
  const { visible, handleCancel } = props;
  const { tags, delimiters, handleDelete, handleAddition, handleDrag } = tagsInputHandler();

  return (
    <Modal
      visible={visible}
      onCancel={handleCancel}
      title="Invite Friends"
      footer={false}
      centered={true}
      maskClosable={false}
    >
      <div className="invite-friends">
        <h6>Usernames, coma separated</h6>
        <TagsInput
          tags={tags}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
        />

        <div className="btn-wrapper">
          <button className="btn btn-black">Invite</button>
        </div>
      </div>
    </Modal>
  );
}

export default InviteFriends;
