import React from 'react';
import { useSelector } from 'react-redux';
import { selectors as channelSelectors } from '../../../slices/channelsSlice.js';
import { selectors as messageSelectors } from '../../../slices/messagesSlice.js';

function MessagesHeader() {
  const currentChannelId = useSelector((state) => state.channels.selectedChannel);
  const currentChannel = useSelector((state) => channelSelectors
    .selectById(state, currentChannelId));
  const messagesAmount = useSelector(messageSelectors.selectAll)
    .filter((item) => item.channelId === currentChannelId).length;

  return (
    <div className="bg-light mb-4 p-3 shadow-sm small">
      {currentChannel && (
        <>
          <p className="m-0">
            <b>
              #
              {currentChannel.name}
            </b>
          </p>
          <span className="text-muted">
            {messagesAmount}
            {' '}
            сообщений
          </span>
        </>
      )}

    </div>
  );
}

export default MessagesHeader;
