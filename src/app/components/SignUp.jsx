import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from '../assets/signupImg.jpeg';
import useAuth from '../hooks/useAuth';

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const auth = useAuth();
  const navigate = useNavigate();

  const SignUpSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Слишком короткое!')
      .max(20, 'Слишком длинное!')
      .required('Обязательное поле'),
    password: Yup.string()
      .min(6, 'Слишком короткий!')
      .required('Обязательное поле'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Значения не совпадают')
      .required('Обязательное поле'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: async ({ username, password }, { setFieldError }) => {
      try {
        setIsLoading(true);
        const response = await axios.post('/api/v1/signup', { username, password });
        localStorage.setItem('user', JSON.stringify(response.data));
        setIsLoading(false);
        auth.logIn();
        navigate('/', { replace: true });
      } catch {
        setIsLoading(false);
        setFieldError('username', 'submit');
        setFieldError('password', 'submit');
        setFieldError('confirmPassword', 'Пользователь с таким именем уже существует');
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
                  ? <h1 className="text-center mb-4">Регистрация</h1>
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
                    placeholder="Ваш ник"
                    id="username"
                    className={`form-control ${formik.errors.username ? 'is-invalid' : null}`}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="username">Ваш ник</label>
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
                    placeholder="Пароль"
                    id="password"
                    className={`form-control ${formik.errors.password ? 'is-invalid' : null}`}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="password" className="form-label">Пароль</label>
                  {formik.errors.password // eslint-disable-line no-nested-ternary
                    ? formik.errors.password === 'submit'
                      ? null
                      : <div className="invalid-tooltip">{formik.errors.password}</div>
                    : null}
                </div>
                <div className="form-floating mb-4">
                  <input
                    name="confirmPassword"
                    type="password"
                    required
                    placeholder="Пароль"
                    id="confirmPassword"
                    className={`form-control ${formik.errors.confirmPassword ? 'is-invalid' : null}`}
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="confirmPassword" className="form-label">Подтвердите пароль</label>
                  {formik.errors.confirmPassword
                    ? <div className="invalid-tooltip">{formik.errors.confirmPassword}</div>
                    : null}
                </div>
                <button
                  type="submit"
                  className="w-100 mb-3 btn btn-outline-primary"
                  disabled={isLoading}
                >
                  Зарегистрироваться
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
