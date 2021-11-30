
import { Container } from '@material-ui/core';
import React, {Component, Fragment} from 'react';


class SupMisNominas extends Component{
    render(){
        return(
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h1>Creación de Nominas</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            
                        <button type="button" class="btn btn-primary">Crear Nomina</button>
                        </div>
                    </div>
                </div>
           
        );
    }
}

export default SupMisNominas;



