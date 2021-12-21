import React from "react";
import "../public/css/PerfilUser.css";
import NavbarAdmin from "../components/Nav_Bar/NavbarAdmin";
import CEditarUsuario from "../components/User/UserAdmin/CEditarUsuario.jsx";
import Background from "../components/Login/Background";




export default function EditarUsuario(props) {
  console.log("MENSAJE LOCO: ",props.state)
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
                
                <CEditarUsuario cedula ={props.cedula} tipo= {props.tipo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
