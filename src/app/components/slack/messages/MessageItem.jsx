import React from 'react';
import filter from 'leo-profanity';

function MessageItem({ author, text }) {
  filter.loadDictionary('ru');

  return (
    <div className="text-break mb-2">
      <b>{author}</b>
      :
      {' '}
      {filter.clean(text)}
    </div>
  );
}

export default MessageItem;
