import BuscarPermisos from "../components/User/UserNomina/BucarPermisos";
import NavbarNomina from "../components/Nav_Bar/NavbarNomina";
import TablaPermisos from "../components/User/UserNomina/TablaPermisos";
import Background from "../components/Login/Background";

export default function PermisosNomina() {
  return (
    <>
      
      <div className="container-lg">
        <Background />
        <div className="row">
          <div className="col">
            <NavbarNomina />
          </div>
          <div className="col-10">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1>Gestion Empleados - Permisos</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <BuscarPermisos />
                </div>
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
