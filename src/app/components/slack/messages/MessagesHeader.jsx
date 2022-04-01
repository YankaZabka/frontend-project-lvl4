import React from 'react';
import {useSelector} from "react-redux";
import {selectors} from "../../../slices/channelsSlice.js";

function MessagesHeader() {
    const currentChannelId = useSelector((state) => state.channels.selectedChannel)
    const currentChannel = useSelector((state) => selectors.selectById(state, currentChannelId))
    console.log(currentChannel)


    return (
    <div className="bg-light mb-4 p-3 shadow-sm small">
        {currentChannel && <>
            <p className="m-0"><b># {currentChannel.name}</b></p>
            <span className="text-muted">77 сообщений</span>
        </>}

    </div>
  );
}

export default MessagesHeader;
