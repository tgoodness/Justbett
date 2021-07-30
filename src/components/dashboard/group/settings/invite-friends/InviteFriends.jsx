import React from 'react';
import { Modal } from 'antd';

import TagsInput from '../../../../../lib/control/tags-input/TagsInput';
import tagsInputHandler from '../../../../../lib/control/tags-input/LogicHandler';
import '../../../../../lib/style/dashboard/group/invite-friends.scss';

function Dialog(props) {
  const { visible, handleCancel } = props;
  const [tags, delimiters, handleDelete, handleAddition, handleDrag] = tagsInputHandler();

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

export default Dialog;
