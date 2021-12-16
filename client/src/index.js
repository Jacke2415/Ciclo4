import React, { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import Routes from './services/Routes.js'

import { User } from './services/session.js';

/* import SolicitarCertificado from './components/User/UserEmpleado/SolicitarCertificado'; */
axios.defaults.withCredentials = true;

var data_user = User();
console.log(User());

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

