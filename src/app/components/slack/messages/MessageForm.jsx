import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import useSocket from '../../../hooks/useSocket';

function MessageForm() {
  const [isLoading, setIsLoading] = useState(false);
  const inputEl = useRef();

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const socket = useSocket();
  const channelId = useSelector((state) => state.channels.selectedChannel);
  const author = JSON.parse(localStorage.getItem('user')).username;
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      text: '',
    },
    onSubmit: ({ text }, { resetForm }) => {
      setIsLoading(true);

      socket.emit('newMessage', { text, channelId, author }, () => {
        setIsLoading(false);
        resetForm();
        inputEl.current.focus();
      });
    },
  });

  return (
    <div className="mt-auto px-5 py-3">
      <form className="py-1 border rounded-2" onSubmit={formik.handleSubmit}>
        <div className="input-group has-validation">
          <input
            name="text"
            id="text"
            type="text"
            aria-label="Новое сообщение"
            placeholder={t('messages.formPlaceholder')}
            className="border-0 p-0 ps-2 form-control"
            ref={inputEl}
            value={formik.values.text}
            onChange={formik.handleChange}
          />
          <button type="submit" disabled={formik.values.text === '' || isLoading} className="btn btn-group-vertical">
            {!isLoading
              ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                    />
                  </svg>
                  <span className="visually-hidden">Отправить</span>
                </>
              )
              : (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Загрузка...</span>
                </div>
              )}

          </button>
        </div>
      </form>
    </div>
  );
}

export default MessageForm;
