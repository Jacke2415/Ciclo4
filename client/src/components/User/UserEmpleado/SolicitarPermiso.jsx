import React from "react";

class SolicitarPer extends React.Component {
    render() {
        return (

            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card" style={{ "width: 18rem": "100", "padding: 10px": "10px" }}>
                            
                            <div class="card-body">
                                <h5>Solicitar Permisos</h5>
                                <label class="labels">Nombre</label>
                                <input type="text" class="form-control" placeholder="Nombre" value="" />
                                <label class="labels">Apellido</label>
                                <input type="text" class="form-control" value="" placeholder="Apellido" />
                                <label class="labels">Identificacion</label>
                                <input type="text" className="form-control" placeholder="Numero de Telefono" value="" />
                            </div>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Descripcion..." id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Asunto del Permiso</label>
                            </div>

                            <ul class="list-group list-group-flush">
                                <label for="floatingTextarea">Tipo de Permiso A Solicitar</label>
                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">

                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                                    <label class="btn btn-outline-primary" for="btnradio1">Remunerado</label>

                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="btnradio2">No Remunerado</label>
                                </div>
                                <li class="list-group-item">fecha del permiso (Inicio)
                                <input type="date" id="inputMDEx" class="form-control" /></li>
                                <li class="list-group-item">fecha del permiso (Final)
                                <input type="date" id="inputMDEx" class="form-control" /></li>
                                
                            </ul>
                            <div class="card-body">
                                <button type="button" class="btn btn-primary">
                                    Solicitar Permisos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SolicitarPer;
