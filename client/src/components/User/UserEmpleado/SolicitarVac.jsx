import React from "react";
import '../../../public/css/SoliVac.css';

class SoliVac extends React.Component {

    render() {

        return (
            <div class="container rounded bg-white mt-4 mb-1" style={{position: 'relative'}}>
                <div class="row">
                    <div class="col-sd-5 border-right">
                        <div class="p-2 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Solicitar Vacaciones</h4>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4">
                                    <label class="labels">Nombre</label>
                                    <input type="text" class="form-control" placeholder="Nombre" value="" />
                                </div>
                                <div class="col-md-4">
                                    <label class="labels">Apellido</label>
                                    <input type="text" class="form-control" value="" placeholder="Apellido" />
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12">
                                    <label class="labels">Numero de Telefono</label>
                                    <input type="text" class="form-control" placeholder="Numero de Telefono" value="" />
                                </div>
                                <div class="col-md-12">
                                    <label class="labels">Direccion</label>
                                    <input type="text" class="form-control" placeholder="Direccion" value="" />
                                </div>
                                <div class="col-md-12">
                                    <label class="labels">Email</label>
                                    <input type="text" class="form-control" placeholder="Email" value="" />
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <div class="md-form">
                                        <label for="inputMDEx">Fecha de Inicio</label>
                                        <input type="date" id="inputMDEx" class="form-control" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="md-form">
                                        <label for="inputMDEx">Fecha de Finalizacion</label>
                                        <input type="date" id="inputMDEx" class="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div class="row-mt-5">
                                <div class="col-md-5">
                                    <div class="boton">
                                        <a class="btn btn-primary btn-lg" href="#">
                                            <span>Confirmar</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default SoliVac;