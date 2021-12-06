import React from 'react';
import { Link } from 'react-router-dom';
import '../../public/css/navbar.css';



class Navbar extends React.Component {

    render() {

        return (
            <>
                <div class="area"></div><nav class="main-menu">
                    <ul>
                        <li>
                            <Link to='../components/UserEmpleado/Perfil_User'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                                <span class="nav-text">
                                    Perfil del usuario
                                </span>
                            </Link>

                        </li>
                        <li className="has-subnav">
                            <a href="#">
                                <i className="fa fa-laptop fa-2x"></i>
                                <span className="nav-text">
                                    Stars Components
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