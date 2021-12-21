import BuscarEmpleado from "../components/User/UserNomina/BuscarEmpleado";
import TablaVacaciones from "../components/User/UserNomina/TablaVacaciones";
import NavbarNomina from "../components/Nav_Bar/NavbarNomina.jsx";


export default function VacacionesNomina() {
  return (
    <>
      <div className="container-lg">
        <div className="row">
          <div className="col">
            <NavbarNomina />
          </div>
          <div className="col-10">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1>Gestion Empleados - Vacaciones</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <BuscarEmpleado />
                </div>
                <div className="col-12">
                  <TablaVacaciones />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
