/* eslint-disable react/prop-types */
import { WithContext as ReactTags } from 'react-tag-input';
import './style.scss';

function InpuTags(props) {
  const { tags, delimiters, handleDelete, handleAddition, handleDrag } = props;
  return (
    <ReactTags
      tags={tags}
      delimiters={delimiters}
      handleDelete={handleDelete}
      handleAddition={handleAddition}
      handleDrag={handleDrag}
    />
  );
}

export default InpuTags;
