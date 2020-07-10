// imports
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';

// render everyting into index.html
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);