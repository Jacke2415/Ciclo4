import React from 'react';
/* import { Button } from 'react-bootstrap';*/
/* import './'; */

class Nav_bar extends React.Component {

    render() {

        return (
            <><div className="Accordion">
                <ul className="show-dropdown main-navbar">
                    <div className="selector-active">
                        <div className="top"></div>
                        <div className="bottom"></div>
                    </div>
                    <img className="mx-lg-5" src="./nominas.png" weight="90px" height="90px"
                        style="margin-left: 20px; border-radius: 10px;"></img>
                    <li className="active">
                        <a href="javascript:void(0);"><i class ="fas fa-user-edit"></i>Perfil Usuario</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);"><i class ="fas fa-money-check-alt"></i>Reporte Nomina</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);"><i class ="far fa-calendar-alt"></i>Solicitar Vacaciones</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);"><i class ="far fa-file"></i>Solicitar Certificados</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><i class ="far fa-clipboard"></i>Solicitar Permisos</a>
                    </li>
                </ul>
            </div></>

        );
    }
}
export default Nav_bar;