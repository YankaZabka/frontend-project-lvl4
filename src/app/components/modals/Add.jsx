/* eslint jsx-a11y/label-has-associated-control: 0 */
import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { updateStatus } from '../../slices/modalsSlice.js';
import { changeChannel, selectors } from '../../slices/channelsSlice';
import useSocket from '../../hooks/useSocket';
import { notifySuccess } from '../../../notify';

function Add() {
  const dispatch = useDispatch();
  const socket = useSocket();
  const { t } = useTranslation();
  const inputRef = useRef();
  const channelNames = useSelector(selectors.selectAll).map((item) => item.name);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onHide = () => {
    dispatch(updateStatus(null));
  };

  const validationSchema = Yup.object().shape({
    body: Yup.string().required(t('modals.add.errors.required')),
  });

  const formik = useFormik({
    initialValues: {
      body: '',
    },
    validationSchema,
    onSubmit: ({ body }, { setFieldError }) => {
      const isRepeat = channelNames.find((item) => item === body);

      if (isRepeat) {
        setFieldError('body', t('modals.add.errors.repeat'));
      } else {
        setIsLoading(true);
        socket.emit('newChannel', { name: body }, (response) => {
          if (response.status === 'ok') {
            notifySuccess(t('notify.add'));
          }
          setIsLoading(false);
          onHide();
          dispatch(changeChannel(response.data.id));
        });
      }
    },
  });

  return (
    <Modal show centered>
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title>{t('modals.add.title')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup>

            <FormControl
              required
              ref={inputRef}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.body}
              data-testid="input-body"
              name="body"
              className={`mb-3 ${formik.errors.body && 'is-invalid'}`}
              id="name"
            />
            <label className="visually-hidden" htmlFor="name">Имя канала</label>
            {formik.errors.body && <div className="invalid-tooltip">{formik.errors.body}</div>}
            <div className="d-flex justify-content-end">
              <button type="button" className="me-2 btn btn-secondary" onClick={onHide}>{t('buttons.cancel')}</button>
              <button type="submit" className="btn btn-primary" disabled={formik.values.body === '' || isLoading}>{t('buttons.create')}</button>
            </div>
          </FormGroup>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default Add;
