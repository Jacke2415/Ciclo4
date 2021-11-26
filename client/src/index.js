import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import Login from './components/Login/Login'; */
import Navbar from './components/Users/Nav_bar';


ReactDOM.render(
  <React.StrictMode>
    {/* <Login />   */}  
    <Navbar />

  </React.StrictMode>,
  document.getElementById('root')
);
