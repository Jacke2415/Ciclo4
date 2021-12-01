import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';



import CrearNomina from './components/User/UserNomina/CrearNomina';
import SupMisNominas from './components/User/UserNomina/SupMisNominas'
import {TablaFuncionario} from './components/User/UserNomina/TablaFuncionario'
import {TablaNominas} from './components/User/UserNomina/TablaNominas'





ReactDOM.render(
  <React.StrictMode>
    <TablaFuncionario />
=======
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import CrearNomina from './components/User/UserNomina/CrearNomina'; */
/* import { DataTableDemo } from './components/User/UserNomina/DataTableDemo'; */
import { Plantilla } from './components/User/Plantilla';
import Login from './pages/Login';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Login />} />
        <Route path = '/singin' element = {<Login />} />
        <Route path = '/singin/user' element = {<Plantilla />} />    
      </Routes>
    </BrowserRouter>
>>>>>>> cae06e442798bec180a034acfc1b4ae4ba7545c2
  </React.StrictMode>,
  document.getElementById('root')
);
