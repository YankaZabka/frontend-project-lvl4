import React, { useEffect } from 'react';
import axios from 'axios';
import { batch, useDispatch } from 'react-redux';
import ChannelsList from './channels/ChannelsList.jsx';
import MessagesList from './messages/MessagesList.jsx';
import SlackContainer from './SlackContainer.jsx';
import { fetchMessages } from '../../slices/messagesSlice.js';
import { fetchChannels, changeChannel } from '../../slices/channelsSlice.js';

function Slack() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userInfo = localStorage.getItem('user');
    const parsedInfo = JSON.parse(userInfo);
    const { token } = parsedInfo;

    const fetch = async () => {
      const response = await axios.get('/api/v1/data', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { channels, currentChannelId, messages } = response.data;

      batch(() => {
        dispatch(fetchMessages(messages));
        dispatch(fetchChannels(channels));
        dispatch(changeChannel(currentChannelId));
      });
    };

    fetch();
  }, [dispatch]);

  return (
    <SlackContainer>

      <ChannelsList />
      <MessagesList />

    </SlackContainer>
  );
}

export default Slack;
