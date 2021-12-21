import React from "react";
import "../public/css/PerfilUser.css";
import NavbarAdmin from "../components/Nav_Bar/NavbarAdmin";
import BuscarPermisos from "../components/User/UserNomina/BucarPermisos";
import TablaPermisos from "../components/User/UserNomina/TablaPermisos";
class GestionarPermisosAdmin extends React.Component {
  render() {
    return (
      
      <>
        <div className="container-lg">
          <div className="row">
            <div className="col">
              
              <NavbarAdmin />
            </div>
            <div className="col-10">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h1>Gestionar Permisos - Administrador</h1>
                    <BuscarPermisos />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <TablaPermisos />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default GestionarPermisosAdmin;
