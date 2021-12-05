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
                                <i class="bi bi-person-circle"></i>
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