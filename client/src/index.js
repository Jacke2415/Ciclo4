import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import './index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
/* import CrearNomina from './components/User/UserNomina/CrearNomina'; */
/* import { DataTableDemo } from './components/User/UserNomina/DataTableDemo'; */
import Login from './pages/Login'; 
/* import PerfilUser from './components/User/UserEmpleado/PerfilUser.jsx' */
import SoliRep from './components/User/UserEmpleado/SolicitaRep'
import SolicitarPer from './components/User/UserEmpleado/SolicitarPermiso'
import SoliVac from './components/User/UserEmpleado/SolicitarVac'
=======

import Login from './pages/Login'; 
import LiquidarNomina from './pages/LiquidarNomina';
import CrearNomina from './pages/CrearNomina';
import CrearEmpleado from './pages/CrearEmpleado';
import VacacionesNomina from './pages/VacacionesNomina';
import PermisosNomina from './pages/PermisosNomina';
import ReporteSalario from './pages/ReporteSalario';
import Formulario from '../src/components/User/UserNomina/Formulario';
import PerfilUserNomina from './pages/PerfilUserNomina.jsx';
import PerfilEmpleado from './components/User/UserEmpleado/PerfilUser.jsx';
import SoliRep from './components/User/UserEmpleado/SolicitaRep'; 
import SolicitarPermiso from './components/User/UserEmpleado/SolicitarPermiso';
import SolicitarVacaciones from './components/User/UserEmpleado/SolicitarVac';
/* import SolicitarCertificado from './components/User/UserEmpleado/SolicitarCertificado'; */
>>>>>>> c485343e0f6e8f25e0ded062bf6bf0641851c2fc

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path = '/' element = {< Login/>} />
        <Route path = '/singin/user' element = {<SoliVac/>} />
        <Route path = '/solirep' element = {<SoliRep/>} />
        <Route path = '/soliper/' element = {<SolicitarPer/>}/>
=======
        <Route path = '/' element = {<Login />} />
        <Route path = '/singin' element = {<Login />} />
        
        <Route path = '/singin/userEmpleado/perfilEmpleado' element = {< PerfilEmpleado/>} />
        <Route path = '/singin/userEmpleado/reporteNomina' element = {< SoliRep/>} />
        <Route path = '/singin/userEmpleado/solicitarPermiso' element = {< SolicitarPermiso/>} />
        <Route path = '/singin/userEmpleado/solicitarVaciones' element = {< SolicitarVacaciones/>} />
        <Route path = '/singin/userEmpleado/solicitarCertificado' element = {< SoliRep/>} />    
        
        <Route path = '/singin/userNomina/crearNomina' element = {<CrearNomina />} />    
        <Route path = '/singin/userNomina/liquidarNomina' element = {<LiquidarNomina />}/>
        <Route path = '/singin/userNomina/reporteSalario' element = {<ReporteSalario />}/>
        <Route path = '/singin/userNomina/formulario' element = {<Formulario />}/>   
        <Route path = '/singin/userNomina/Perfil' element = {<PerfilUserNomina />} /> 
        <Route path = '/singin/userNomina/crearEmpleado' element = {<CrearEmpleado />} /> 
        <Route path = '/singin/userNomina/liquidarNomina' element = {<LiquidarNomina />} />
        <Route path = '/singin/userNomina/gestionarVacaciones' element = {<VacacionesNomina />} />
        <Route path = '/singin/userNomina/gestionarPermisos' element = {<PermisosNomina />} />
        <Route path = '/singin/userNomina/reporteSalario' element = {<ReporteSalario />} />
                
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
                
>>>>>>> c485343e0f6e8f25e0ded062bf6bf0641851c2fc
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

