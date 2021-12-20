import React, {Component, Fragment} from 'react';


class SupReporteSalario extends Component{
    render(){
        return(
            <>
                <div className="container" style={{position: 'relative'}}>
                    <div className="row">
                        <div className="col-6">
                            <h2>Reporte de Salarios</h2>
                        </div>
                    </div>
                    <div>
                    <div className="form">
                        <div className="row">
                            <div className="col-3">
                                
                                <select class="form-select" id="escogersalario" required>
                                    <option selected disabled value="">Escoger Salario</option>
                                    <option>Salario Mayores</option>
                                    <option>Salario Menores</option>
                                </select>
                                <div class="invalid-feedback">
                                   Por favor escoja el reporte que necesita
                                   
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="descripcion" placeholder="Ingrese Salario"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>    
                          
                    <br />
                    <div className="row">
                        <div className="col-3">
                            <button type="button" class="btn btn-primary">Generar Reporte</button>
                        </div>
                        <div className="col-2">
                            <button type="button" class="btn btn-primary">Cancelar</button>
                        </div>
                        
                    </div>
                </div>
            </>
           
        );
    }
}

export default SupReporteSalario;