import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';

import {BrowserRouter } from 'react-router-dom';

/* ReactDOM.render(
    <App />,
    document.getElementById('root')
); */

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);