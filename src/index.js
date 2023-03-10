import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TypeAnimation } from 'react-type-animation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='main-page'>
  <React.StrictMode>
    <center>
 <TypeAnimation
      sequence={[

        'Calculator', 
        () => {
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{alignItems: "center",justifyContent:"center", fontSize: '50px', fontFamily: "courier"}}
    />
    </center>
    <App />
  </React.StrictMode>
  </div>
);

