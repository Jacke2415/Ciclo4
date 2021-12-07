import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import './index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import CrearNomina from './components/User/UserNomina/CrearNomina'; */
/* import { DataTableDemo } from './components/User/UserNomina/DataTableDemo'; */
import Login from './pages/Login';
import LiquidarNomina from './pages/LiquidarNomina';
import CrearNomina from './pages/CrearNomina';
import CrearEmpleado from './pages/CrearEmpleado';
import VacacionesNomina from './pages/VacacionesNomina';
import PermisosNomina from './pages/PermisosNomina';
import Navbar from './components/Nav_Bar/Navbar.jsx';
import NavbarNomina from './components/Nav_Bar/NavbarNomina.jsx';
import PerfilUserNomina from './components/User/UserNomina/PerfilUserNomina.jsx'
/* import SoliVac from './components/User/UserEmpleado/SolicitarVac' */

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {< PerfilUserNomina/>} />
        <Route path = '/singin' element = {<Login />} />
        <Route path = '/singin/userNomina/crearEmpleado' element = {<CrearEmpleado />} /> 
        <Route path = '/singin/userNomina/crearNomina' element = {<CrearNomina />} />    
        <Route path = '/singin/userNomina/liquidarNomina' element = {<LiquidarNomina />} />
        <Route path = '/singin/userNomina/GestionarVacaciones' element = {<VacacionesNomina />} />
        <Route path = '/singin/userNomina/GestionarPermisos' element = {<PermisosNomina />} />
        <Route path = '/singin/user' element = {<NavbarNomina />} />    
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
