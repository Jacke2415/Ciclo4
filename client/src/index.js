import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import './index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Nav_Bar/Navbar.jsx';
import NavbarNomina from './components/Nav_Bar/Navbar.jsx';

import Login from './pages/Login'; 
import LiquidarNomina from './pages/LiquidarNomina';
import CrearNomina from './pages/CrearNomina';
import CrearEmpleado from './pages/CrearEmpleado';
import VacacionesNomina from './pages/VacacionesNomina';
import PermisosNomina from './pages/PermisosNomina';
import ReporteSalario from './pages/ReporteSalario';
import PerfilUser from './components/User/UserEmpleado/PerfilUser.jsx'
import SoliRep from './components/User/UserEmpleado/SolicitaRep'
import Formulario from './components/User/UserNomina/Formulario.jsx';
import PerfilUserNomina from './pages/PerfilUserNomina.jsx';
import SoliVac from './components/User/UserEmpleado/SolicitarVac'; 

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Login />} />
        <Route path = '/singin/user' element = {<Navbar />} />    
        <Route path = '/singin/userNomina/crearNomina' element = {<CrearNomina />} />    
        <Route path = '/singin/userNomina/liquidarNomina' element = {<LiquidarNomina />}/>
        <Route path = '/singin/userNomina/reporteSalario' element = {<ReporteSalario />}/>
        <Route path = '/singin/userNomina/formulario' element = {<Formulario />}/>   
        <Route path = '/singin/userNomina/Perfil' element = {<PerfilUserNomina />} /> 
        <Route path = '/singin/userNomina/crearEmpleado' element = {<CrearEmpleado />} /> 
        <Route path = '/singin/userNomina/liquidarNomina' element = {<LiquidarNomina />} />
        <Route path = '/singin/userNomina/GestionarVacaciones' element = {<VacacionesNomina />} />
        <Route path = '/singin/userNomina/GestionarPermisos' element = {<PermisosNomina />} />
        <Route path = '/singin/userNomina/ReporteSalario' element = {<ReporteSalario />} />
                
        <Route path = '/singin/administrador/crearNomina' element = {<CrearNomina />} />    
        <Route path = '/singin/administrador/liquidarNomina' element = {<LiquidarNomina />}/>
        <Route path = '/singin/administrador/reporteSalario' element = {<ReporteSalario />}/>
        <Route path = '/singin/administrador/formulario' element = {<Formulario />}/>   
        <Route path = '/singin/administrador/Perfil' element = {<PerfilUserNomina />} /> 
        <Route path = '/singin/administrador/crearEmpleado' element = {<CrearEmpleado />} /> 
        <Route path = '/singin/administrador/liquidarNomina' element = {<LiquidarNomina />} />
        <Route path = '/singin/administrador/GestionarVacaciones' element = {<VacacionesNomina />} />
        <Route path = '/singin/administrador/GestionarPermisos' element = {<PermisosNomina />} />
        <Route path = '/singin/administrador/ReporteSalario' element = {<ReporteSalario />} />
                
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
