import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../src/public/css/Formulario.css';
import Login from './components/Login/Login';
import Formulario from './components/User/UserNomina/Formulario';
import VacacionesNomina from "./components/User/UserNomina/VacacionesNomina"




ReactDOM.render(
  <React.StrictMode>
    <VacacionesNomina />    
  </React.StrictMode>,
  document.getElementById('root')
);
