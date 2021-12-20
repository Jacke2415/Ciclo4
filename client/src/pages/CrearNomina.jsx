//import '../../../public/css/Login.css'
import NavbarNomina from '../components/Nav_Bar/NavbarNomina';
import SupMisNominas from '../components/User/UserNomina/SupMisNominas';
import {TablaNominas} from '../components/User/UserNomina/TablaNominas';
import Background from "../components/Login/Background";
export default function CrearNomina() {
    return (
      <>
        <div className="container-lg">
          <div className="row">
            <div className="col">
              <Background/>
              <NavbarNomina />
            </div>
            <div className="col-10">
              <SupMisNominas />
              <TablaNominas />
            </div>

          </div>
        </div>        

      </>
    );
}

  
