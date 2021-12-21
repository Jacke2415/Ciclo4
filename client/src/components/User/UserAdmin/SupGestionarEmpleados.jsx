import { Link } from '@material-ui/core';
import React, {Component, Fragment} from 'react';


class SupGestionarEmpleados extends Component{
    render(){
        return(
            <>
                <div className="container" style={{position: 'relative'}}>
                    <div className="row">
                        <div className="col-6">
                            <h2>Gestionar Empleados</h2>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-3 align-center">
                            <Link to='' type="button" class="btn btn-primary">Crear Empleado</Link>
                        </div>
                        <div className="col-3">
                            <button type="button" class="btn btn-primary">Editar Empleado</button>
                        </div>
                        <div className="col-3">
                            <button type="button" class="btn btn-primary">Desactivar Empleado</button>
                        </div>
                        <div className="col-3">
                            <button type="button" class="btn btn-primary">Eliminar Empleado</button>
                        </div>
                    </div>
                </div>
            </>
           
        );
    }
}

export default SupGestionarEmpleados;