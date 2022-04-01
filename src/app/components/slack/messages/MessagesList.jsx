import React from 'react';
import { useSelector } from 'react-redux';
import MessageItem from './MessageItem.jsx';
import MessageForm from './MessageForm.jsx';
import MessagesHeader from './MessagesHeader.jsx';
import MessagesContainer from './MessagesContainer.jsx';
import { selectors } from '../../../slices/messagesSlice';

function MessagesList() {
  const currentChannel = useSelector((state) => state.channels.selectedChannel);
  const messages = useSelector(selectors.selectAll)
    .filter((item) => item.channelId === currentChannel);

  return (
    <MessagesContainer>
      <MessagesHeader />

      <div id="messages-box" className="chat-messages overflow-auto px-5 ">
        {messages && messages
          .map(({ author, text, id }) => <MessageItem key={id} author={author} text={text} />)}
      </div>

      <MessageForm />

    </MessagesContainer>
  );
}

export default MessagesList;
