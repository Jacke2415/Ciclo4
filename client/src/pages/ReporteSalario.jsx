//import '../../../public/css/Login.css'
import SupReporteSalario from "../components/User/UserNomina/SupReporteSalario";
import { TablaReporte } from "../components/User/UserNomina/TablaReporte";
import NavbarNomina from "../components/Nav_Bar/NavbarNomina";
/* import { TablaNominas } from '../components/User/UserNomina/TablaNominas'; */

export default function ReporteSalario() {
  return (
    <>
      <div className="container-lg">
        <div className="row">
          <div className="col-2">
            <NavbarNomina />
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-12">
                <SupReporteSalario />
              </div>
              <div className="col-12">
                <TablaReporte />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
