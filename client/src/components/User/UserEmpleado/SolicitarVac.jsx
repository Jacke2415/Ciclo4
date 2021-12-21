import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import swal from 'sweetalert';
import { useSelector } from "react-redux";
import { checkUser } from "../../../redux/apiCalls/authApiCalls";
import '../../../public/css/SoliVac.css';

const SoliVac = (props) => {
    
    

    const { currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        checkUser(dispatch);
    }, [dispatch])

    const [vacacion, setVacacion] = useState({
        cedula:"",
        fechaInicial:"",
        fechaFinal:"",
        diasVacaciones:"",
        estado:""

    });
    vacacion.cedula=currentUser.cedula;
    var fechai=new Date(vacacion.fechaInicial)
    var fechaf=new Date(vacacion.fechaFinal)
    var resta= Math.abs(fechaf-fechai);
    var date= (resta/(1000*3600*24))+1; 
    vacacion.diasVacaciones=(date);    
    console.log(date)   

    const onSubmitCreate = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:5000/vacaciones", vacacion)
            .then(() => {
                window.location.reload(false)
                console.log(vacacion)
                
            })   
            .catch((error) => {
                console.log(error);
                
            });
        swal("Su solicitud ha sido registrada");
    }
    
    
    

    return (
        <div class="container rounded bg-white mt-4 mb-1" style={{position: 'relative'}}>
            <div class="row">
                <div class="col-md-5 border-right">
                    <div class="p-2 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="text-right">Solicitar Vacaciones</h4>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-4">
                                <label class="labels">Nombre</label>
                                <input type="text" class="form-control" placeholder="Nombre" 
                                value= {currentUser.nombre}  disabled/>
                            </div>
                            <div class="col-md-4">
                                <label class="labels">Apellido</label>
                                <input type="text" class="form-control" 
                                value={currentUser.apellido} placeholder="Apellido"  disabled/>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12">
                                    <label class="labels">Numero de Telefono</label>
                                    <input type="text" class="form-control" placeholder="Numero de Telefono" 
                                    value={currentUser.telefono} disabled/>
                                </div>
                                <div class="col-md-12">
                                    <label class="labels">Direccion</label>
                                    <input type="text" class="form-control" placeholder="Direccion" 
                                    value={currentUser.direccion} disabled/>
                                </div>
                                <div class="col-md-12">
                                    <label class="labels">Email</label>
                                    <input type="text" class="form-control" placeholder="Email" 
                                    value={currentUser.email} disabled/>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <div class="md-form">
                                        <label for="inputMDEx">Fecha de Inicio</label>
                                        <input type="date" id="inputMDEx" class="form-control" 
                                        value={vacacion.fechaInicial}
                                        onChange={(event) => {
                                            setVacacion({ ...vacacion, fechaInicial: event.target.value })
                                        }} />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="md-form">
                                        <label for="inputMDEx">Fecha de Finalizacion</label>
                                        <input type="date" id="inputMDEx" class="form-control" 
                                        value= {vacacion.fechaFinal} 
                                        onChange={(event) => {
                                            setVacacion({ ...vacacion, fechaFinal: event.target.value })
                                        }}/>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div class="row-mt-5">
                                <div class="col-md-5">
                                    <button type="submit"
                                        className="btn btn-primary" 
                                        onClick={onSubmitCreate}>Confirmar
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
}
export default SoliVac;