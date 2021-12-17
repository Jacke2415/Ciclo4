import React from 'react';
import { Link } from 'react-router-dom';
import '../../public/css/navbar.css';
import DNavbar from './Navbar.jsx';


const NavbarEmpleado = () => {
    const items = [
        {"name": "Perfil de Usuario", "url": "/signin/userNomina/Perfil"},
        {"name": 'Solicitar Permisos', 'url': "#"},
        {"name": 'Solicitar Vacaciones', 'url': "/signin/userEmpleado/solicitarVaciones"},
        {"name": 'Certificados Laborales', 'url': "#"},
        {"name": 'Solicitar Reportes de Pago', 'url': "#"}

    ]
    return(
        <DNavbar items={items}/>
    );
}

export default NavbarEmpleado;