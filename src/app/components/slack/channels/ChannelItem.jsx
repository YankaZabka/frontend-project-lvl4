import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SplitButton, Dropdown, Button } from 'react-bootstrap';
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
          <SplitButton
            variant={`${currentId === id ? 'secondary' : 'outline-secondary'}`}
            title={`# ${name}`}
            id="segmented-button-dropdown-1"
            className="d-flex mb-2"
            onClick={onClick}
          >
            <Dropdown.Item>Удалить</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Переименовать</Dropdown.Item>
          </SplitButton>
        )
        : (
          <div className="d-grid gap-2">
            <Button
              variant={`${currentId === id ? 'secondary' : 'outline-secondary'}`}
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
