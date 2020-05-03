import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can chan$
// unregister() to register() below. Note this comes with some pitfal$
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
