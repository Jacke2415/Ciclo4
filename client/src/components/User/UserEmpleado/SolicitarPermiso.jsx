import React from "react";

class SolicitarPer extends React.Component {
    render() {
        return (

            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card" style={{ "width: 18rem": "100", "padding: 10px": "10px" }}>
                            <img class="card-img-top" src="..." aria-hidden alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">juancho perez</h5>
                                <p class="card-text">
                                    descripcion del permiso/porque lo solicita .etc
                                </p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                                    <label class="btn btn-outline-primary" for="btnradio1">Remunerado</label>

                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="btnradio2">No Remunerado</label>
                                </div>
                                <li class="list-group-item">fecha del permiso</li>
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
