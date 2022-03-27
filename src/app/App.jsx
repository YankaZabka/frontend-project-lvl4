import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
import Slack from './components/Slack.jsx';
import NotFound from './components/NotFound.jsx';

function App() {
  return (
    <div className="d-flex flex-column h-100">

      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Slack />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
