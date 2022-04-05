import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import image from '../assets/loginImg.jpeg';
import useAuth from '../hooks/useAuth';
import { notifyError } from '../../notify';

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const { t } = useTranslation();

  const auth = useAuth();
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required(t('login.errors.required')),
    password: Yup.string().required(t('login.errors.required')),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setFieldError }) => {
      try {
        setIsLoading(true);
        const response = await axios.post('/api/v1/login', values);
        localStorage.setItem('user', JSON.stringify(response.data));
        setIsLoading(false);
        auth.logIn();
        navigate('/', { replace: true });
      } catch {
        notifyError(t('login.errors.server'));
        setIsLoading(false);
        setFieldError('username', 'submit');
        setFieldError('password', t('login.errors.server'));
      }
    },
  });

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src={image} alt="Войти" className="rounded-circle" />
              </div>
              <form className="col-12 col-md-6 mt-3 mt-mb-0" onSubmit={formik.handleSubmit}>
                {!isLoading
                  ? <h1 className="text-center mb-4">{t('login.title')}</h1>
                  : (
                    <div className="d-flex justify-content-center">
                      <div className="spinner-grow text-primary mb-4" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  )}
                <div className="form-floating mb-3">
                  <input
                    name="username"
                    required
                    placeholder={t('login.username')}
                    id="username"
                    className={`form-control ${formik.errors.username ? 'is-invalid' : null}`}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="username">{t('login.username')}</label>
                  {formik.errors.username // eslint-disable-line no-nested-ternary
                    ? formik.errors.username === 'submit'
                      ? null
                      : <div className="invalid-tooltip">{formik.errors.username}</div>
                    : null}
                </div>
                <div className="form-floating mb-4">
                  <input
                    name="password"
                    type="password"
                    required
                    placeholder={t('login.password')}
                    id="password"
                    className={`form-control ${formik.errors.password ? 'is-invalid' : null}`}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="password" className="form-label">{t('login.password')}</label>
                  {formik.errors.password
                    ? <div className="invalid-tooltip">{formik.errors.password}</div>
                    : null}
                </div>
                <button
                  type="submit"
                  className="w-100 mb-3 btn btn-outline-primary"
                  disabled={isLoading}
                >
                  {t('buttons.login')}
                </button>
              </form>
            </div>
            <div className="card-footer p-4">
              <div className="text-center">
                <span>{t('login.withoutAccount')}</span>
                <Link to="/signup">{t('login.link')}</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
