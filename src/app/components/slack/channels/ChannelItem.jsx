/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
import React from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import { Button, SplitButton, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
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
          <SplitButton
            variant={currentId === id ? 'secondary' : ''}
            title={`# ${name}`}
            id="segmented-button-dropdown-1"
            className="d-flex"
            onClick={onClick}
          >
            <Dropdown.Item onClick={onRemove}>{t('buttons.remove')}</Dropdown.Item>
            <Dropdown.Item onClick={onRename}>{t('buttons.rename')}</Dropdown.Item>
          </SplitButton>
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
