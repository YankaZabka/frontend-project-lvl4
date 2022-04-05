import React from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import { Button, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { changeChannel } from '../../../slices/channelsSlice';
import { updateItem, updateStatus } from '../../../slices/modalsSlice';

function ChannelItem({ name, id, removable }) {
  const currentId = useSelector((state) => state.channels.selectedChannel);
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
    batch(() => {
      dispatch(updateStatus('renaming'));
      dispatch(updateItem({ name, id }));
    });
  };

  return (
    <li className="nav-item w-100">
      {removable
        ? (
          <Dropdown as={ButtonGroup} className="d-flex">
            <Button onClick={onClick} variant={currentId === id ? 'secondary' : ''}>
              <span className="mr-1">#</span>
              {name}
            </Button>

            <Dropdown.Toggle role="button" split variant={currentId === id ? 'secondary' : ''} id="dropdown-split-basic">
              <span className="d-none">{t('buttons.dropdown')}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={onRemove}>{t('buttons.remove')}</Dropdown.Item>
              <Dropdown.Item onClick={onRename}>{t('buttons.rename')}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
