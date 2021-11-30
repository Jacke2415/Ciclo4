import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import CrearNomina from './components/User/UserNomina/CrearNomina';
import SupMisNominas from './components/User/UserNomina/SupMisNominas'
import {TablaFuncionario} from './components/User/UserNomina/TablaFuncionario'
import {TablaNominas} from './components/User/UserNomina/TablaNominas'


ReactDOM.render(
  <React.StrictMode>
    //<CrearNomina />
    <SupMisNominas />
    <TablaFuncionario />
    <TablaNominas />
   // {/*<Login />*/ }   
  </React.StrictMode>,
  document.getElementById('root')
);
