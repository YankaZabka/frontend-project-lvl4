import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { changeChannel } from '../../../slices/channelsSlice';

function ChannelItem({ name, id, removable }) {
  const currentId = useSelector((state) => state.channels.selectedChannel);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(changeChannel(id));
  };

  return (
    <li className="nav-item w-100">
      {removable
        ? (
          <div className="btn-group d-flex">
            <button
              type="button"
              className={`btn ${currentId === id ? 'btn-secondary' : ''}`}
              onClick={onClick}
            >
              {`# ${name}`}
            </button>
            <button
              type="button"
              className={`btn ${currentId === id ? 'btn-secondary' : ''} dropdown-toggle dropdown-toggle-split`}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-item">Удалить</li>
              <li><hr className="dropdown-divider" /></li>
              <li className="dropdown-item">Переименовать</li>
            </ul>
          </div>
        )
        : (
          <div className="d-grid gap-2">
            <Button
              variant={`${currentId === id ? 'secondary' : ''}`}
              className="d-flex mb-2"
              onClick={onClick}
            >
              {`# ${name}`}
            </Button>
          </div>
        )}
    </li>
  );
}

export default ChannelItem;
