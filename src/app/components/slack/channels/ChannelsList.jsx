import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ChannelItem from './ChannelItem.jsx';
import ChannelsAddBtn from './ChannelsAddBtn.jsx';
import { selectors } from '../../../slices/channelsSlice.js';

function ChannelsList() {
  const channels = useSelector(selectors.selectAll);
  const { t } = useTranslation();

  return (
    <div className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
      <div className="d-flex justify-content-between mb-2 ps-4 pe-2">
        <span>{t('channels.title')}</span>
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
