import React, { useState } from "react";
//import "../../../public/css/Formulario.css"
import axios from 'axios'

export default function SupLiquidar () {
        
    const [nomina, setNomina] = useState({
        estadoNomina: '',
        tipoLiquidacion: '',
        fechaInicio:'',
        fechaFin:'',
        total: '',
    });


    const createNomina = (n) => {
        n.preventDefault();
        axios
            .post("http://localhost:5000/nominas", nomina)
            .then(() => {
                window.location.reload(false)
                console.log(nomina)
            })
            .catch((error) => {
                console.log(error);
            });
    };
  
    return(
        <>
                <form className="card" onSubmit={createNomina}>
                    <h6>Liquidar Nomina</h6>
                    <div class="row">
                        <div class="col">
                            <select className="form-select mb-2" aria-label="Default select example"
                                id="estadoNomina" value ={nomina.estadoNomina} /* onBlur= {handleBlur} */ onChange= {(event) => {
                                setNomina({...nomina, estadoNomina: event.target.value})
                                }}>
                                <option selected>Estado</option>
                                <option value="pagada">Pagada</option>
                                <option value="pendiente">Pendiente</option>
                                
                            </select>
                        
                        </div>
                        <div class="col-3">
                            <select className="form-select mb-3" aria-label="Default select example"
                                id="tipoLiquidacion" value ={nomina.tipoLiquidacion} /* onBlur= {handleBlur} */ onChange= {(event) => {
                                setNomina({...nomina, tipoLiquidacion: event.target.value})
                                }}>
                                <option selected>Tipo Liquidación</option>
                                <option value="mensual">Mensual</option>
                                <option value="quincenal">Quincenal</option>
                                
                            </select>
                        </div>
                   
                        <div class="col-3">
                            <div className="form">
                                <input type="date" className="form-control" 
                                id="fechaInicio" placeholder="Periodo Inicial" 
                                value ={nomina.fechaInicio} /* onBlur= {handleBlur} */ onChange= {(event) => {
                                    setNomina({...nomina, fechaInicio: event.target.value})
                                }} />
                                {/* {errors.fnacimiento && <p classNameName="error"> {errors.fnacimiento} </p>} */}
                            </div>
                        </div>
                        <div class="col-3">
                            <div className="form">
                                <input type="date" className="form-control" 
                                id="fechaFin" placeholder="Periodo Final" 
                                value ={nomina.fechaFin} /* onBlur= {handleBlur} */ onChange= {(event) => {
                                    setNomina({...nomina, fechaFin: event.target.value})
                                }} />
                                {/* {errors.fnacimiento && <p classNameName="error"> {errors.fnacimiento} </p>} */}
                            </div> 
                            
                        </div>
                       
                    </div>
                    
                    <div class="row">
                        <div class="col-4">
                            <div className="d-grid gap-2">
                                <button type="submit" 
                                className="btn btn-primary" onClick = {createNomina}>Liquidar Nomina</button>
                            </div>         
                        </div>
                    </div>


                    
                    
                </form>

            
            
        </>
    )
}



/* import React, {Component, Fragment} from 'react';


class SupLiquidar extends Component{
    render(){
        return(
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h2>Liquidar Nominas</h2>
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-3">
                                
                                <select class="form-select" id="tipoliquidacion" required>
                                    <option selected disabled value="">Tipo de Liquidación</option>
                                    <option>...</option>
                                </select>
                                <div class="invalid-feedback">
                                   Por favor escoja Tipo de Liquidación
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="descripcion" placeholder="Descripción de la nomina"/>
                                </div>
                                
                            </div>
                            <div className="col-3">
                            <select class="form-select" id="mes" required>
                                    <option selected disabled value="">Mes</option>
                                    <option>...</option>
                                </select>
                                <div class="invalid-feedback">
                                   Por favor escoja el mes
                                </div>
                            </div>
                            <div class="col-md-3">
                                <select class="form-select" id="year" required>
                                    <option selected disabled value="">Año</option>
                                    <option>...</option>
                                </select>
                                <div class="invalid-feedback">
                                   Por favor escoja el año
                                </div>
                            </div>
    

                        </div>
                    </div>
                    <br />
                    <div className="row d-flex justify-content-around">
                        <div className="col-3">
                            <button type="button" class="btn btn-primary">Liquidar Nomina</button>
                        </div>
                        <div className="col-2">
                            <button type="button" class="btn btn-primary">Cancelar</button>
                        </div>
                        <div className="col-2">
                            <Link to="/singin/administrador/graficaNomina" className='btn btn-primary'>
                                Ver Grafico
                            </Link>
                        </div>
                    </div>
                </div>
            </>
           
        );
    }
}

export default SupLiquidar; */