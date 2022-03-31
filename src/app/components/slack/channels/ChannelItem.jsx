import React from 'react';

function ChannelItem({ name, id, removable }) {
  return (
    <li className="nav-item w-100">
      <button type="button" className="w-100 rounded-0 text-start btn">
        <span
          className="me-1"
        >
          #
        </span>
        {name}
      </button>
    </li>
  );
}

export default ChannelItem;
