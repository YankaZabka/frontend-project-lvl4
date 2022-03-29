import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
import Slack from './components/Slack.jsx';
import NotFound from './components/NotFound.jsx';
import AuthContext from './contexts';
import useAuth from './hooks/useAuth';

function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
  };

  return (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function PrivateRoute({ children }) {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.loggedIn ? children : <Navigate to="/login" state={{ from: location }} />
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <div className="d-flex flex-column h-100">

          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={(
                <PrivateRoute><Slack /></PrivateRoute>)}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
