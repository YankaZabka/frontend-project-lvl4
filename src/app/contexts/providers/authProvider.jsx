/* eslint react-hooks/rules-of-hooks: 0 */
import React, { useEffect, useState } from 'react';
import AuthContext from '../auth.js';

const authProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('user'));

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setLoggedIn(true);
    }
  }, []);

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
};

export default authProvider;
