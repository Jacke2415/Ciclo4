import { Link } from "@material-ui/core";
import React, { Component, Fragment } from "react";

class SupGestionarEmpleados extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h2>Gestionar Vacaciones de Empleados</h2>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-3 align-center">
              <Link to="" type="button" class="btn btn-primary">
                Aceptar Vacaciones
              </Link>
            </div>
            <div className="col-3">
              <button type="button" class="btn btn-primary">
                Rechazar Vacaciones
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SupGestionarEmpleados;
