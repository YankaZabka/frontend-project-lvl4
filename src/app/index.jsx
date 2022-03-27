import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

export default () => {
  const bodyEl = document.querySelector('body');
  bodyEl.classList.add('bg-light');
  bodyEl.innerHTML = '';

  const height100Element = document.createElement('div');
  height100Element.classList.add('h-100');

  const container = document.createElement('div');
  container.classList.add('h-100');
  container.setAttribute('id', 'chat');

  bodyEl.append(height100Element);
  height100Element.append(container);

  ReactDOM.render(<App />, container);
};
