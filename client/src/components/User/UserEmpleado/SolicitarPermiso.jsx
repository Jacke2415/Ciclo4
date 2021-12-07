import React from "react";

class SolicitarPer extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card" style={{"width: 18rem":"auto"}}>
                            <img class="card-img-top" src="..." aria-hidden alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">juancho perez</h5>
                                <p class="card-text">
                                    descripcion del permiso/porque lo solicita .etc
                                </p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    tipo de permiso: remunerado / no remunerado
                                </li>
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
