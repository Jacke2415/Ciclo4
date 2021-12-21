import NavbarAdmin from "../components/Nav_Bar/NavbarAdmin";
import { TablaFuncionarioCopia } from "../components/User/UserNomina/TablaFuncionarioCopia";
import SupGestionarVacaciones from "../components/User/UserAdmin/SupGestionarVacaciones";
import BuscarEmpleado from "../components/User/UserNomina/BuscarEmpleado";
import Background from "../components/Login/Background";

export default function GestionarVacacionesAdmin() {
  return (
    <>
      <Background/>
      <div className="container-lg" style={{ padding: "9px" }}>
        <div className="row">
          <div className="col">
            <NavbarAdmin />
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-12">
                <h1>Gestionar Vacaciones - Administrador</h1>
                <BuscarEmpleado />
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
