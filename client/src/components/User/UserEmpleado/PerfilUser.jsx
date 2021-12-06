import React from "react";
import '../../../public/css/PerfilUser.css';

class Perfil extends React.Component {

    render() {

        return (
            <div class="container rounded bg-white mt-5 mb-5">
                <div class="row">
                    <div class="col-md-3 border-right">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img class="rounded-circle mt-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF2psCzfbB611rnUhxgMi-lc2oB78ykqDGYb4v83xQ1pAbhPiB&usqp=CAU" />
                            <span class="font-weight-bold">Amelly</span>
                            <span class="text-black-50">amelly12 @bbb.com</span>
                            <span> </span>
                        </div>
                    </div>
                    <div class="col-md-5 border-right">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Perfil Empleado</h4>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6">
                                    <label class="labels">Nombre</label>
                                    <input type="text" class="form-control" placeholder="Nombre" value="" />
                                </div>
                                <div class="col-md-6">
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
                                    <label class="labels">Pais</label>
                                    <input type="text" class="form-control" placeholder="Pais" value="" />
                                </div>
                                <div class="col-md-6">
                                    <label class="labels">ciudad</label>
                                    <input type="text" class="form-control" value="" placeholder="Ciudad" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>


        );
    }
}
export default Perfil;