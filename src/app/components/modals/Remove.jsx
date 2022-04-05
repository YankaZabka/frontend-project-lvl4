import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { updateStatus } from '../../slices/modalsSlice.js';
import useSocket from '../../hooks/useSocket';
import { notifySuccess } from '../../../notify';

function Remove() {
  const dispatch = useDispatch();
  const socket = useSocket();
  const { t } = useTranslation();
  const { id } = useSelector((state) => state.modals.item);
  const [isLoading, setIsLoading] = useState(false);

  const onHide = () => {
    dispatch(updateStatus(null));
  };

  const onSubmit = () => {
    setIsLoading(true);
    socket.emit('removeChannel', { id }, (response) => {
      if (response.status === 'ok') {
        notifySuccess(t('notify.remove'));
      }
      setIsLoading(false);
      onHide();
    });
  };

  return (
    <Modal show centered>
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title>{t('modals.remove.title')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="lead">{t('modals.remove.body')}</p>
        <div className="d-flex justify-content-end">
          <button type="button" className="me-2 btn btn-secondary" onClick={onHide}>{t('buttons.cancel')}</button>
          <button type="submit" className="btn btn-danger" onClick={onSubmit} disabled={isLoading}>{t('buttons.remove')}</button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Remove;
