import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import CrearNomina from './components/User/UserNomina/CrearNomina';
import SupMisNominas from './components/User/UserNomina/SupMisNominas'
import {TablaFuncionario} from './components/User/UserNomina/TablaFuncionario'
import {TablaNominas} from './components/User/UserNomina/TablaNominas'





ReactDOM.render(
  <React.StrictMode>
    <TablaFuncionario />
  </React.StrictMode>,
  document.getElementById('root')
);
