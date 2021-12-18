import React from "react";
import "../public/css/PerfilUser.css";
import NavbarAdmin from "../components/Nav_Bar/NavbarAdmin";
import BuscarEmpleado from "../components/User/UserNomina/BuscarEmpleado";
import TablaVacaciones  from "../components/User/UserNomina/TablaVacaciones"


class GestionarEmpleadoAdmin extends React.Component {
  render() {
    return (
      <>
        <div className="container-md" style={{"padding":"9px"}}>
          <div className="row">
            <div className="col">
              <NavbarAdmin />
            </div>
            <div className="col-10">
              <div className="formulario">
                <div className="">
                  <h1>Gestion Empleados - Vacaciones</h1>
                </div>
                
                <BuscarEmpleado />
                
                <TablaVacaciones />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default GestionarEmpleadoAdmin;
