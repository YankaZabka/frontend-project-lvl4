import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import image from '../assets/loginImg.jpeg';

function Login() {
  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2)); // eslint-disable-line no-alert
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
                <h1 className="text-center mb-4">Войти</h1>
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
                  {formik.errors.username ? <div className="invalid-tooltip">{formik.errors.username}</div> : null}
                </div>
                <div className="form-floating mb-4">
                  <input
                    name="password"
                    type="password"
                    required
                    placeholder="Пароль"
                    id="password"
                    className={`form-control ${formik.errors.username ? 'is-invalid' : null}`}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="password" className="form-label">Пароль</label>
                  {formik.errors.password ? <div className="invalid-tooltip">{formik.errors.password}</div> : null}
                </div>
                <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Войти</button>
              </form>
            </div>
            <div className="card-footer p-4">
              <div className="text-center">
                <span>Нет аккаунта? </span>
                <a href="/signup">Регистрация</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
