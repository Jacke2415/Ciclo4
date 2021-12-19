import NavbarAdmin from "../components/Nav_Bar/NavbarAdmin";
import { TablaFuncionarioCopia } from "../components/User/UserNomina/TablaFuncionarioCopia";
import SupGestionarVacaciones from "../components/User/UserAdmin/SupGestionarVacaciones";

export default function GestionarVacacionesAdmin() {

    return (
      <>
        <div className="container-lg">
          <div className="row">
            <div className="col-2">
              <NavbarAdmin />
            </div>
            <div className="col-10">
              <div className="row">
                <div className="col-12">
                  <SupGestionarVacaciones />
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
