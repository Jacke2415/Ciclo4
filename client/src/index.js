import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import CrearNomina from './components/User/UserNomina/CrearNomina';
import SupMisNominas from './components/User/UserNomina/SupMisNominas'
import {TablaFuncionario} from './components/User/UserNomina/TablaFuncionario'


ReactDOM.render(
  <React.StrictMode>
    //<CrearNomina />
    <SupMisNominas />
    <TablaFuncionario />

   // {/*<Login />*/ }   
  </React.StrictMode>,
  document.getElementById('root')
);
