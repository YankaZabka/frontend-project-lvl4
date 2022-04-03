/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
import React from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { changeChannel } from '../../../slices/channelsSlice';
import { updateItem, updateStatus } from '../../../slices/modalsSlice';

function ChannelItem({ name, id, removable }) {
  const currentId = useSelector((state) => state.channels.selectedChannel);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(changeChannel(id));
  };

  const onRemove = () => {
    batch(() => {
      dispatch(updateStatus('removing'));
      dispatch(updateItem({ name, id }));
    });
  };

  const onRename = () => {
    dispatch(updateStatus('renaming'));
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
              <li
                className="dropdown-item"
                onClick={onRemove}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') { onRename(); }
                }}
              >
                Удалить
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li
                className="dropdown-item"
                onClick={onRename}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') { onRename(); }
                }}
              >
                Переименовать
              </li>
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
