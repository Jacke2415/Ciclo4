import React from 'react';
import { Link } from 'react-router-dom';
import '../../public/css/navbar.css';



class Navbar extends React.Component {

    render() {

        return (
            <>
                <nav class="main-menu">
                    <ul>
                        <li>
                            <Link to='../components/UserEmpleado/Perfil_User'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                                <span class="nav-text"> Perfil del Usuario
                                </span>
                            </Link>

                        </li>
                        <li className="has-subnav">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journals" viewBox="0 0 16 16">
                                    <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                                    <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                                </svg>
                                <span className="nav-text">
                                    Solicitar Permisos
                                </span>
                            </a>

                        </li>
                        <li className="has-subnav">
                            <a href="#">
                                <i className="fa fa-list fa-2x"></i>
                                <span className="nav-text">
                                    Forms
                                </span>
                            </a>

                        </li>
                        <li className="has-subnav">
                            <a href="#">
                                <i className="fa fa-folder-open fa-2x"></i>
                                <span className="nav-text">
                                    Pages
                                </span>
                            </a>

                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-bar-chart-o fa-2x"></i>
                                <span className="nav-text">
                                    Graphs and Statistics
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-font fa-2x"></i>
                                <span className="nav-text">
                                    Quotes
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-table fa-2x"></i>
                                <span className="nav-text">
                                    Tables
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-map-marker fa-2x"></i>
                                <span className="nav-text">
                                    Maps
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-info fa-2x"></i>
                                <span className="nav-text">
                                    Documentation
                                </span>
                            </a>
                        </li>
                    </ul>

                    <ul className="logout">
                        <li>
                            <a href="#">
                                <i className="fa fa-power-off fa-2x"></i>
                                <span className="nav-text">
                                    Logout
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>

            </>

        );
    }
}

export default Navbar;