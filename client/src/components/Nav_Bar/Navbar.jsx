import React from 'react';
import './style.css';
import nominas from './nominas.png';


class Navbar extends React.Component {

    render() {

        return (
            <>
                <div className="wrapper">
                    <nav id="sidebar">
                        <div className="sidebar-header">
                            <img src={nominas} weight="90px" height="90px" style={{marginLeft:"20px", borderRadius:"10px",}}/>
                        </div>

                        <ul className="list-unstyled components">
                            <p>Plataforma Nomina</p>
                            
                            <li>
                                <a href="#">About</a>
                            </li>
                            
                            <li>
                                <a href="#">Portfolio</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                
                            </li>
                        </ul>
                    </nav>
                </div>
                
            </>

        );
    }
}

export default Navbar;