import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter basename="/index.html">
          <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

