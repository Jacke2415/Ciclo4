import React from "react";
import "../public/css/PerfilUser.css";
import NavbarAdmin from "../components/Nav_Bar/NavbarAdmin";
import {TablaFuncionario} from "../components/User/UserNomina/TablaFuncionario";
import SupGestionarVacaciones from "../components/User/UserAdmin/SupGestionarVacaciones";

class GestionarEmpleadoAdmin extends React.Component {
  render() {
    return (
      <>
        <div className="container-lg">
          <div className="row">
            <div className="col-2">
              <NavbarAdmin />
            </div>
            <div className="col-10">
              <SupGestionarVacaciones />
              <TablaFuncionario />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default GestionarEmpleadoAdmin;
