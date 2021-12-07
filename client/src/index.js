import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import './index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import CrearNomina from './components/User/UserNomina/CrearNomina'; */
/* import { DataTableDemo } from './components/User/UserNomina/DataTableDemo'; */
import Navbar from './components/Nav_Bar/Navbar.jsx';
import Login from './pages/Login'; 
import PerfilUser from './components/User/UserEmpleado/PerfilUser.jsx'
import SoliRep from './components/User/UserEmpleado/SolicitaRep'
import SolicitarPer from './components/User/UserEmpleado/SolicitarPermiso'

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {< PerfilUser/>} />
        <Route path = '/singin' element = {<Login />} />
        <Route path = '/singin/user' element = {<Navbar />} />    
        <Route path = '/solirep' element = {<SoliRep/>} />
        <Route path = '/soliper/' element = {<SolicitarPer/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
