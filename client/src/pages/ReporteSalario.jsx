//import '../../../public/css/Login.css'
import SupReporteSalario from '../components/User/UserNomina/SupReporteSalario';
import {TablaReporte} from '../components/User/UserNomina/TablaReporte';
import NavbarNomina from '../components/Nav_Bar/NavbarNomina';
/* import { TablaNominas } from '../components/User/UserNomina/TablaNominas'; */

export default function CrearNomina() {
    return (
      <>
        <div className="container-lg">
        <div className="row">
          <div className="col">
            <NavbarNomina />
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-12 d-flex flex-row">
              <SupReporteSalario />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
            <div className="row">
            <div className="col-12">
            </div>
            <TablaReporte />
            </div>
          </div>
        </div>
      </div>
        


        
        

      </>
    );
  }

  
