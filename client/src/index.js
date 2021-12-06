import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LiquidarNomina from './pages/LiquidarNomina';
import CrearNomina from './pages/CrearNomina';
import ReporteSalario from './pages/ReporteSalario';
import Navbar from './'
import Login from './pages/Login';

import Formulario from './pages/Formulario';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
       <Routes>
        <Route path = '/singin/userNomina/crearNomina' element = {<CrearNomina />} />    
        <Route path = '/singin/userNomina/liquidarNomina' element = {<LiquidarNomina />}/>
        <Route path = '/singin/userNomina/reporteSalario' element = {<ReporteSalario />}/>
        <Route path = '/singin/userNomina/formulario' element = {<Formulario />}/>
        <Route path = '/' element = {<Login />} />
        <Route path = '/singin' element = {<Login />}/>
        
        
      </Routes>
      
     
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
