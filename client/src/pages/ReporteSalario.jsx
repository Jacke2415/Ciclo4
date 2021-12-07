//import '../../../public/css/Login.css'
import SupReporteSalario from '../components/User/UserNomina/SupReporteSalario';
import {TablaReporte} from '../components/User/UserNomina/TablaReporte';
import NavbarNomina from '../components/Nav_Bar/NavbarNomina';
import { TablaNominas } from '../components/User/UserNomina/TablaNominas';

export default function CrearNomina() {
    return (
      <>
        <div className="container-lg">
          <div className="row">
            <div className="col-3">
              <NavbarNomina />
            </div>
            <div className="col">
              
                  <SupReporteSalario />
                  <TablaReporte />
                
                            
            </div>

          </div>
        </div>
        


        
        

      </>
    );
  }

  
