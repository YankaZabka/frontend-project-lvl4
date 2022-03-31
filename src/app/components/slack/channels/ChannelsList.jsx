import React from 'react';
import { useSelector } from 'react-redux';
import ChannelItem from './ChannelItem.jsx';
import ChannelsAddBtn from './ChannelsAddBtn.jsx';

function ChannelsList() {
  const channels = useSelector((state) => state.channels.data);

  return (
    <div className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
      <div className="d-flex justify-content-between mb-2 ps-4 pe-2">
        <span>Каналы</span>
        <ChannelsAddBtn />
      </div>

      <ul className="nav flex-column nav-pills nav-fill px-2">

        { channels
            && channels.map(({ id, name, removable }) => (
              <ChannelItem
                key={id}
                name={name}
                id={id}
                removable={removable}
              />
            ))}

      </ul>

    </div>
  );
}

export default ChannelsList;
