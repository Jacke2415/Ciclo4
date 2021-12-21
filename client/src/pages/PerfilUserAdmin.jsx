import React from "react";
import "../public/css/PerfilUser.css";
import NavbarAdmin from "../components/Nav_Bar/NavbarAdmin";
import PerfilUser from "../components/User/UserEmpleado/PerfilUser";
import Background from "../components/Login/Background";
class PerfilUserAdmin extends React.Component {
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
              <PerfilUser />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default PerfilUserAdmin;
