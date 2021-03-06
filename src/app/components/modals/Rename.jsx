/* eslint jsx-a11y/label-has-associated-control: 0 */
import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import { FormControl, FormGroup, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { updateStatus } from '../../slices/modalsSlice.js';
import useSocket from '../../hooks/useSocket';
import { selectors } from '../../slices/channelsSlice';
import { notifySuccess } from '../../../notify';

function Rename() {
  const dispatch = useDispatch();
  const socket = useSocket();
  const { t } = useTranslation();
  const inputRef = useRef();
  const channelNames = useSelector(selectors.selectAll).map((item) => item.name);
  const [isLoading, setIsLoading] = useState(false);
  const { id, name } = useSelector((state) => state.modals.item);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onHide = () => {
    dispatch(updateStatus(null));
  };

  const validationSchema = Yup.object().shape({
    body: Yup.string().required(t('modals.rename.errors.required')),
  });

  const formik = useFormik({
    initialValues: {
      body: name,
    },
    validationSchema,
    onSubmit: ({ body }, { setFieldError }) => {
      const isRepeat = channelNames.find((item) => item === body);

      if (isRepeat) {
        setFieldError('body', t('modals.rename.errors.repeat'));
      } else {
        setIsLoading(true);
        socket.emit('renameChannel', { id, name: body }, (response) => {
          if (response.status === 'ok') {
            notifySuccess(t('notify.rename'));
          }
          setIsLoading(false);
          onHide();
        });
      }
    },
  });

  return (
    <Modal show centered onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.rename.title')}</Modal.Title>
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
            <label className="visually-hidden" htmlFor="name">?????? ????????????</label>
            {formik.errors.body && <div className="invalid-tooltip">{formik.errors.body}</div>}
            <div className="d-flex justify-content-end">
              <button type="button" className="me-2 btn btn-secondary" onClick={onHide}>{t('buttons.cancel')}</button>
              <button type="submit" className="btn btn-primary" disabled={formik.values.body === '' || isLoading}>{t('buttons.confirm')}</button>
            </div>
          </FormGroup>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default Rename;
