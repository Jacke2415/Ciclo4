import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import CrearNomina from './components/User/UserNomina/CrearNomina'; */
/* import { DataTableDemo } from './components/User/UserNomina/DataTableDemo'; */
import { Plantilla } from './components/User/Plantilla';
import Login from './pages/Login';
import LiquidarNomina from './pages/LiquidarNomina';
import CrearNomina from './pages/CrearNomina';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Login />} />
        <Route path = '/singin' element = {<Login />} />
        <Route path = '/singin/user' element = {<Plantilla />} />
        <Route path = '/singin/userNomina/crearNomina' element = {<CrearNomina />} />    
        <Route path = '/singin/userNomina/liquidarNomina' element = {<LiquidarNomina />} />
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
