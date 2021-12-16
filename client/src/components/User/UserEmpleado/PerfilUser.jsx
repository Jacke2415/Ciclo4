import React, { useState } from "react";
import "../../../public/css/PerfilUser.css";
class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enable: true }
  }
  handleGameClik() {
    this.setState( {enable: !this.state.enable} )
  } 
  render() {
    return (

      <div className="content">
        <div className="row">
          <div className="col-md-3 bg-white border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF2psCzfbB611rnUhxgMi-lc2oB78ykqDGYb4v83xQ1pAbhPiB&usqp=CAU" alt=""
              />
              <span className="font-weight-bold">Amelly</span>
              <span className="text-black-50">amelly12 @bbb.com</span>
              <span> </span>
            </div>
          </div>


          <div className="col-md-5 bg-white border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Perfil Empleado</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    disabled
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    placeholder="Apellido"
                    disabled
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">N° Identificacion</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="N° Identificacion"
                    disabled
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Cargo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cargo"
                    disabled
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Numero de Telefono</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Numero de Telefono"
                    value=""
                    disabled={this.state.enable}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Direccion</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Direccion"
                    value=""
                    disabled={this.state.enable}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value=""
                    disabled={this.state.enable}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Salario</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Salario"
                    value=""
                    disabled
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Fecha de Ingreso</label>
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    placeholder="Fecha de Ingreso"
                    disabled
                  />
                </div>
              </div>
            </div>
              <button type="button" class="btn btn-primary" onClick={this.handleGameClik.bind(this)}> Editar Perfil </button>
          </div>


        </div>

      </div>


    );
  }
}
export default Perfil;
