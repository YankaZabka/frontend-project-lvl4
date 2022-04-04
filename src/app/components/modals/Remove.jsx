import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatus } from '../../slices/modalsSlice.js';
import useSocket from '../../hooks/useSocket';
import { changeChannel } from '../../slices/channelsSlice';

function Remove() {
  const dispatch = useDispatch();
  const socket = useSocket();
  const selectedChannelId = useSelector((state) => state.channels.selectedChannel);
  const { id } = useSelector((state) => state.modals.item);
  const [isLoading, setIsLoading] = useState(false);

  const onHide = () => {
    dispatch(updateStatus(null));
  };

  const onSubmit = () => {
    setIsLoading(true);
    socket.emit('removeChannel', { id }, () => {
      if (selectedChannelId === id) {
        dispatch(changeChannel(1));
      }
      setIsLoading(false);
      onHide();
    });
  };

  return (
    <Modal show centered>
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title>Удалить</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="lead">Вы уверены?</p>
        <div className="d-flex justify-content-end">
          <button type="button" className="me-2 btn btn-secondary" onClick={onHide}>Отменить</button>
          <button type="submit" className="btn btn-danger" onClick={onSubmit} disabled={isLoading}>Удалить</button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Remove;
