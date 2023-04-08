import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import GoogleTranslate from './components/GoogleTranslate';

import App from './App';
import './index.css';

ReactDOM.render(
  <Router>
    <GoogleTranslate />
    <App />
  </Router>,
  document.getElementById('root'),
);

