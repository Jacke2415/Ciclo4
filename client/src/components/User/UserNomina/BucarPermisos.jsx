import React from "react"
import { useState } from "react";
import axios from "axios";

const Style = {
    width: '18rem',
};


const BuscarPermisos = () =>{
    const [cedula, setCedula]=useState("");
    const [user, setUser] = useState({});
    
    const onBuscar = (e) => {
        e.preventDefault();
        
        axios
                .get('http://localhost:5000/users/cedula/${cedula}', user)
                .then(() => {
                    window.location.reload(false)
                    console.log(user)
                    alert(user)
                })
                .catch((error) => {
                    console.log(error);
                    
                });
    }            
    return(
        <>
            <div className="card my-2">
                <div className="row">
                    <div className="col-6">
                    <div className="row mb-2 ">
                        <label for="" className="col">No Identificación</label>
                    </div>
                    <div className="row mb-3 ">
                        <input type="text" className="form-control" id="cedula" value={cedula} 
                        onChange={(event) => {setCedula(event.target.value)
                        console.log(event.target.value);}} />
                        
                    </div>
                    <div className="row mb-4 ">
                        <button class="btn btn-primary" type="button" onClick={onBuscar}>Buscar</button>
                    </div>
                    </div>
                
                    <div className="col-6 ">
                    <table className="table-sm table-bordered border-light table-rounded">
                        <thead>
                        <tr>
                            <th>Nombre:</th> <td>{user.nombre}</td>
                        </tr>
                        <tr>
                            <th>Cargo:</th> <td>Ingeniero de Sistemas</td>
                        </tr>
                        <tr>
                            <th>Fecha Inical Permisos:</th> <td>16/01/2022</td>
                        </tr>
                        <tr>
                            <th>Fecha Fin Permisos:</th> <td>30/01/2022</td>
                        </tr>
                
                        <tr>
                            <td><button type="button" className="btn btn-success">Aceptar</button></td> 
                            <td><button type="button" className="btn btn-danger">Rechazar</button></td>
                        </tr>
                        </thead>
                    </table> 
                    </div>
                </div>  
            </div>      
            
        </>
    )
}
export default BuscarPermisos