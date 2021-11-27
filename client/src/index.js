import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import CrearNomina from './components/User/UserNomina/CrearNomina';
import { DataTableDemo } from './components/User/UserNomina/DataTableDemo';



ReactDOM.render(
  <React.StrictMode>
    <CrearNomina />
    

    {/*<Login />*/ }   
  </React.StrictMode>,
  document.getElementById('root')
);
