import React from 'react';
import {
  BrowserRouter, Navigate, Route, Routes, useLocation,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
import Slack from './components/slack/Slack.jsx';
import NotFound from './components/NotFound.jsx';
import AuthProvider from './contexts/providers/authProvider.jsx';
import SocketProvider from './contexts/providers/socketProvider.jsx';
import useAuth from './hooks/useAuth';
import 'bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import getModal from './components/modals/index.js';
import SignUp from './components/SignUp.jsx';
import i18n from '../locales/initI18next.js';

function PrivateRoute({ children }) {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.loggedIn ? children : <Navigate to="/login" state={{ from: location }} />
  );
}

function PublicRoute({ children }) {
  const auth = useAuth();
  const location = useLocation();

  return (
    !auth.loggedIn ? children : <Navigate to="/" state={{ from: location }} />
  );
}

const renderModal = (modalType) => {
  if (!modalType) {
    return null;
  }

  const Component = getModal(modalType);
  return <Component />;
};

function App() {
  const modalType = useSelector((state) => state.modals.status);

  return (
    <I18nextProvider i18n={i18n}>
      <SocketProvider>
        <AuthProvider>
          <BrowserRouter>

            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />

            <div className="d-flex flex-column h-100">

              <Navbar />
              <Routes>
                <Route exact path="/" element={<PrivateRoute><Slack /></PrivateRoute>} />
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
                <Route path="*" element={<NotFound />} />
              </Routes>

            </div>
            {renderModal(modalType)}
          </BrowserRouter>
        </AuthProvider>
      </SocketProvider>
    </I18nextProvider>
  );
}

export default App;
