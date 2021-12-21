import React from "react";
import "../public/css/PerfilUser.css";
import NavbarAdmin from "../components/Nav_Bar/NavbarAdmin";
import { TablaFuncionarioCopia } from "../components/User/UserNomina/TablaFuncionarioCopia";
import SupGestionarEmpleados from "../components/User/UserAdmin/SupGestionarEmpleados";
import Background from "../components/Login/Background";
class GestionarEmpleadoAdmin extends React.Component {
  render() {
    return (
      <>
        <Background />
        <div className="container-lg">
          <div className="row">
            <div className="col-2">
              <NavbarAdmin />
            </div>
            <div className="col-10">
              <div className="row">
                <div className="col-12">
                  <SupGestionarEmpleados />
                </div>
                <div className="col-12">
                  <TablaFuncionarioCopia />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default GestionarEmpleadoAdmin;
