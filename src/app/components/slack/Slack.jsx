import React, { useEffect } from 'react';
import axios from 'axios';
import ChannelsList from './channels/ChannelsList.jsx';
import MessagesList from './messages/MessagesList.jsx';
import SlackContainer from './SlackContainer.jsx';

function Slack() {
  useEffect(() => {
    const userInfo = localStorage.getItem('user');
    const parsedInfo = JSON.parse(userInfo);
    const { token } = parsedInfo;
    console.log(token);

    const fetch = async () => {
      const response = await axios.get('/api/v1/data', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    };

    fetch();
  });

  return (
    <SlackContainer>

      <ChannelsList />
      <MessagesList />

    </SlackContainer>
  );
}

export default Slack;
