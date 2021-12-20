import React from "react";
import "../public/css/PerfilUser.css";
import NavbarAdmin from "../components/Nav_Bar/NavbarAdmin";
import BuscarPermisos from "../components/User/UserNomina/BucarPermisos";
import TablaVacaciones from "../components/User/UserNomina/TablaVacaciones"
import Background from "../components/Login/Background";
class GestionarPermisosAdmin extends React.Component {
  render() {
    return (
      <>
        <div className="container-lg">
          <div className="row">
            <div className="col">
              <Background/>
              <NavbarAdmin />
            </div>
            <div className="col-10">
              <div className="container">
                <div className="">
                  <h1>Gestion Empleados - Permisos</h1>
                </div>

                <BuscarPermisos />

                <TablaVacaciones />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default GestionarPermisosAdmin;
