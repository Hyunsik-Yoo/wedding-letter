import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserView, MobileView } from 'react-device-detect';

import './font/AppleSDGothicNeoL.ttf';
import './font/AppleSDGothicNeoR.ttf';
import './font/AppleSDGothicNeoB.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <BrowserView>
        <div style={{
          maxWidth: 390,
          marginLeft: 0,
          marginRight: 0,
          margin: 'auto'
        }}>
          <App />
        </div>
      </BrowserView>
      <MobileView>
        <App />
      </MobileView>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
