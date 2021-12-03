import React from "react"

const Style = {
    width: '18rem',
};

const BuscarEmpleado = () =>{
    return(
        <>
            <div className='container text-center'>
                <div className="row mb-1 ">
                    <label for="" className="col-2">No Identificación</label>
                </div>
                <div className="row mb-3 ">
                    <div className="col-2">
                        <input type="password" className="form-control" id="inputPassword"/>
                    </div>
                </div>
                <div className="row mb-4 ">
                    <div className="col-2">
                        <button className="btn btn-primary" type="button">Buscar</button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="card " style={Style}>
                    <div className="card-body">
                        <h5 className="card-title">Luis Andrade</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            Contador</h6>
                        <p className="card-text">
                            Fecha de Salida: 
                        </p>
                        <p className="card-text">
                           Fecha de Ingreso:
                        </p>
                        <button type="button" className="btn btn-outline-primary">Aceptar</button>
                        <button type="button" className="btn btn-outline-danger">Rechazar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BuscarEmpleado 
    

