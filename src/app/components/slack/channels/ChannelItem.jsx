import React from 'react';
import { useSelector } from 'react-redux';

function ChannelItem({ name, id, removable }) {
  const currentId = useSelector((state) => state.channels.selectedChannel);
  const isSelected = currentId === id ? 'btn-secondary' : '';

  return (
    <li className="nav-item w-100">
      {removable
        ? (
          <div role="group" className="d-flex dropdown btn-group">
            <button type="button" className={`w-100 rounded-0 text-start text-truncate btn ${isSelected}`}>
              <span
                className="me-1"
              >
                #
              </span>
              {name}
            </button>
            <button
              type="button"
              id="react-aria8038969833-1"
              aria-expanded="false"
              className={`flex-grow-0 dropdown-toggle dropdown-toggle-split btn ${isSelected}`}
            >
              <span className="visually-hidden">Управление каналом</span>
            </button>
          </div>
        )
        : (
          <button type="button" className={`w-100 rounded-0 text-start btn ${isSelected}`}>
            <span className="me-1">#</span>
            {name}
          </button>
        )}
    </li>
  );
}

export default ChannelItem;
