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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Login />} />
        <Route path = '/singin' element = {<Login />} />
        <Route path = '/singin/user' element = {<Plantilla />} />    
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
