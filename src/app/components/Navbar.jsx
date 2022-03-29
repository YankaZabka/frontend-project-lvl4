import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function AuthButton() {
  const auth = useAuth();

  return (
    auth.loggedIn
      ? (
        <div
          className="btn btn-primary"
          tabIndex={0}
          role="button"
          onClick={auth.logOut}
          onKeyDown={(e) => {
            if (e.key === 'Enter') { auth.logOut(); }
          }}
        >
          Выйти
        </div>
      )
      : null
  );
}

function Navbar() {
  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link to="/" className="navbar-brand">Hexlet chat</Link>
        <AuthButton />
      </div>
    </nav>
  );
}

export default Navbar;
