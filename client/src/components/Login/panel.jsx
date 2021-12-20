import React from 'react';
import "../../public/css/panel.css";


class Panel extends React.Component {

    render() {

        return (
            <>
                <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
                <label for="menu-icon"></label>
                <nav className="nav">
                    <ul className="pt-5">

                        <img className="navbar-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Amazon_logo.jpg/1200px-Amazon_logo.jpg" width="20%" height="20%" alt=""></img>

                        <li>
                            <h1>Plataforma Sistema de Nómina</h1>
                        </li>
                        <li>
                            <h5>La empresa Amazon actualmente maneja su sistema de nómina a empleados de forma manual, es decir la
                                persona encargada del proceso tiene que construir la nómina cada mes y enviarla al banco
                                correspondiente para realizar el proceso de pago y adicionalmente tomar en cuenta días libres o
                                vacaciones. Razón por la cual la empresa Amazon lo contacta a usted y su equipo con el fin de
                                construir una plataforma donde sea posible gestionar la nómina de sus empleados.</h5>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Panel;