import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import swal from 'sweetalert';
import { useSelector } from "react-redux";
import { checkUser } from "../../../redux/apiCalls/authApiCalls";


const SolicitarPer  = (props) => {
    const { currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        checkUser(dispatch);
    }, [dispatch])

    const [permiso, setPermiso] = useState({
        cedula:"",
        tipoPermiso:"",
        asunto:"",
        fechaInicial:"",
        fechaFinal:"",
        diasPermiso:"",
        estado:""

    });
    permiso.cedula=currentUser.cedula; 
    var fechai=new Date(permiso.fechaInicial)
    var fechaf=new Date(permiso.fechaFinal)
    var resta= Math.abs(fechaf-fechai);
    var date= (resta/(1000*3600*24))+1; 
    permiso.diasPermiso=(date);  
    
    
    const onSubmitCreate = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:5000/permisos", permiso)
            .then(() => {
                window.location.reload(false)
                console.log(permiso)
                
            })   
            .catch((error) => {
                console.log(error);
                
            });
        swal("Su solicitud ha sido registrada");
    }
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card" style={{ "width: 18rem": "100", "padding: 10px": "10px" }}>
                            
                            <div className="card-body">
                                <h5>Solicitar Permisos</h5>
                                <label className="labels">Nombre</label>
                                <input type="text" className="form-control" placeholder="Nombre" 
                                value={currentUser.nombre} disabled/>
                                <label className="labels">Apellido</label>
                                <input type="text" className="form-control" 
                                value={currentUser.apellido} disabled placeholder="Apellido" />
                                <label className="labels">No Telefono</label>
                                <input type="text" className="form-control" placeholder="Numero de Telefono" 
                                value={currentUser.telefono} disabled/>
                            </div>
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Descripcion..." 
                                id="floatingTextarea" value={permiso.asunto}
                                onChange={(event) => {
                                    setPermiso({ ...permiso, asunto: event.target.value })
                                }}></textarea>
                                <label for="floatingTextarea">Asunto del Permiso</label>
                            </div>

                            <ul className="list-group list-group-flush">
                                <label for="floatingTextarea">Tipo de Permiso A Solicitar</label>
                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group"
                                value={permiso.tipoPermiso} >

                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" 
                                    autocomplete="off" checked value="Remunerado" onChange={(event) => {
                                        setPermiso({ ...permiso, tipoPermiso: event.target.value })
                                    }}/>
                                    <label className="btn btn-outline-primary" for="btnradio1">Remunerado</label>

                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" 
                                    autocomplete="off" value="No Remunerado" onChange={(event) => {
                                        setPermiso({ ...permiso, tipoPermiso: event.target.value })
                                    }}/>
                                    <label className="btn btn-outline-primary" for="btnradio2">No Remunerado</label>
                                </div>
                                <li className="list-group-item">fecha del permiso (Inicio)
                                <input type="date" id="inputMDEx" className="form-control" 
                                value={permiso.fechaInicial} onChange={(event) => {
                                    setPermiso({ ...permiso, fechaInicial: event.target.value })
                                }}/></li>
                                <li className="list-group-item">fecha del permiso (Final)
                                <input type="date" id="inputMDEx" className="form-control" 
                                value={permiso.fechaFinal} onChange={(event) => {
                                    setPermiso({ ...permiso, fechaFinal: event.target.value })
                                }}/></li>
                                
                            </ul>
                            <div className="card-body">
                                <button type="button" className="btn btn-primary" 
                                onClick= {onSubmitCreate}>
                                    Solicitar Permisos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}
export default SolicitarPer;
