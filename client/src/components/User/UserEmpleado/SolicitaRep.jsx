import React from "react";
import '../../../public/css/SoliRep.css';
class SoliRep extends React.Component {

    render() {

        return (
            <div class="container rounded bg-white mt-4 mb-1" style={{position: 'relative'}}>
                <div class="row">
                    <div class="col-sd-5 border-right">
                        <div class="p-2 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Solicitar Reportes de Pago</h4>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4">
                                    <label class="labels">Nombre</label>
                                    <input type="text" className="form-control" placeholder="Nombre" value="" />
                                </div>
                                <div class="col-md-4">
                                    <label class="labels">Apellido</label>
                                    <input type="text" className="form-control" value="" placeholder="Apellido" />
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12">
                                    <label class="labels">Identificacion</label>
                                    <input type="text" className="form-control" placeholder="Numero de Telefono" value="" />
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6">
                                        <label action="/action_page.php" >
                                            <input type="month" id="bdaymonth" name="bdaymonth" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row-mt-5">
                                <div class="col-md-5">
                                    <div class="boton">
                                        <a type="button" class="btn btn-primary btn-lg" href="#">
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
export default SoliRep;