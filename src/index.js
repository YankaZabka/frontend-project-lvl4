// @ts-check
import ReactDOM from 'react-dom';
import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';
import { io } from 'socket.io-client';

import '../assets/application.scss';
import init from './app/index.jsx';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const render = async () => {
  const socket = io();
  const vDom = await init(socket);
  ReactDOM.render(vDom, document.getElementById('chat'));
};

render();
