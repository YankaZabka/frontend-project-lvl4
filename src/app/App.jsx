import React from 'react';
import {BrowserRouter, Navigate, Route, Routes, useLocation,} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
import Slack from './components/slack/Slack.jsx';
import NotFound from './components/NotFound.jsx';
import AuthProvider from './contexts/providers/authProvider.jsx';
import SocketProvider from './contexts/providers/socketProvider.jsx';
import useAuth from './hooks/useAuth';

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

function App() {
  return (
      <SocketProvider>
        <AuthProvider>
          <BrowserRouter>

            <div className="d-flex flex-column h-100">

              <Navbar />
              <Routes>
                <Route exact path="/" element={<PrivateRoute><Slack /></PrivateRoute>} />
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="*" element={<NotFound />} />
              </Routes>

            </div>
          </BrowserRouter>
        </AuthProvider>
      </SocketProvider>
  );
}

export default App;
