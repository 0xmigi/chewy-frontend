import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router} from 'react-router-dom';
import { MoralisProvider } from 'react-moralis';

const moralisAppId = process.env.REACT_APP_MORALIS_APP_ID;
const moralisServerURL = process.env.REACT_APP_MORALIS_SERVER_URL;

ReactDOM.render(
  <Router hashtype="noslash">
    <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL} >
      <App />
    </MoralisProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
