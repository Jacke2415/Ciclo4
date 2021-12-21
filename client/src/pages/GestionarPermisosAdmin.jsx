import React from "react";
import "../public/css/PerfilUser.css";
import NavbarAdmin from "../components/Nav_Bar/NavbarAdmin";
import { TablaFuncionario } from "../components/User/UserNomina/TablaFuncionario";
import SupGestionarPermisos from "../components/User/UserAdmin/SupGestionarPermisos";

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
                    <SupGestionarPermisos />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <TablaFuncionario />
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
