import React from 'react';
import ChannelsList from './channels/ChannelsList.jsx';
import MessagesList from './messages/MessagesList.jsx';
import SlackContainer from './SlackContainer.jsx';

function Slack() {
  return (
    <SlackContainer>

      <ChannelsList />
      <MessagesList />

    </SlackContainer>
  );
}

export default Slack;
