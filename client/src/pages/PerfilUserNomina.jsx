import React from "react";
import "../public/css/PerfilUser.css";
import NavbarNomina from "../components/Nav_Bar/NavbarNomina.jsx";
import PerfilUser from "../components/User/UserEmpleado/PerfilUser";
import Background from "../components/Login/Background";
class PerfilUserNomina extends React.Component {
  render() {
    return (
      <>
        <div className="container-lg">
          <div className="row">
            <div className="col">
              <Background />
              <NavbarNomina />
            </div>
            <div className="col-10">
              <PerfilUser />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default PerfilUserNomina;
