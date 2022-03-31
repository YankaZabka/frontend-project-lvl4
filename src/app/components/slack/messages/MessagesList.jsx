import React from 'react';
import MessageItem from './MessageItem.jsx';
import MessageForm from './MessageForm.jsx';
import MessagesHeader from './MessagesHeader.jsx';
import MessagesContainer from './MessagesContainer.jsx';

function MessagesList() {
  return (
    <MessagesContainer>
      <MessagesHeader />

      <div id="messages-box" className="chat-messages overflow-auto px-5 ">
        <MessageItem author="Zyrael" text="hgfhfdhfg" />
        <MessageItem author="admin" text="d" />
      </div>

      <MessageForm />

    </MessagesContainer>
  );
}

export default MessagesList;
