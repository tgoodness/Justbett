import { useState } from 'react';

function LogicHandler() {
  const KeyCodes = {
    comma: 188,
    enter: 13,
    spaceBar: 32,
  };

  const delimiters = [KeyCodes.comma, KeyCodes.enter, KeyCodes.spaceBar];

  const initialState = {
    tags: [{ id: 'goodness', text: 'You' }],
  };

  const [state, setState] = useState(initialState);

  const handleDelete = (i) => {
    const { tags } = state;
    if (i > 0)
      setState({
        tags: tags.filter((tag, index) => index !== i),
      });
  };

  const handleAddition = (tag) => {
    setState((state) => ({ tags: [...state.tags, tag] }));
  };

  const handleDrag = (tag, currPos, newPos) => {
    const tags = [...state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setState({ tags: newTags });
  };

  const { tags } = state;
  return { tags, delimiters, handleDelete, handleAddition, handleDrag };
}

export default LogicHandler;
