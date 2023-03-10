import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='main-page'>
  <React.StrictMode>
    <center>
    <h1 style={{alignItems: "center",justifyContent:"center", fontSize: '50px', fontFamily: "monospace"}}>Calculator</h1>
    </center>
    <App />
  </React.StrictMode>
  </div>
);

