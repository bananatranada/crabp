import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import App from './components/App/App';
import Routes from './routes';
import './index.css';


ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);