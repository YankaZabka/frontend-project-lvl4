import React from 'react';

function MessageItem({ author, text }) {
  return (
    <div className="text-break mb-2">
      <b>{author}</b>
      :
      {' '}
      {text}
    </div>
  );
}

export default MessageItem;
