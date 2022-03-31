import React from 'react';
import ChannelItem from './ChannelItem.jsx';
import ChannelsAddBtn from './ChannelsAddBtn.jsx';

function ChannelsList() {
  return (
    <div className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
      <div className="d-flex justify-content-between mb-2 ps-4 pe-2">
        <span>Каналы</span>
        <ChannelsAddBtn />
      </div>

      <ul className="nav flex-column nav-pills nav-fill px-2">

        <ChannelItem name="general" />
        <ChannelItem name="random" />

      </ul>

    </div>
  );
}

export default ChannelsList;
