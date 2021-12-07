//import '../../../public/css/Login.css'
import NavbarNomina from '../components/Nav_Bar/Navbar';
import SupMisNominas from '../components/User/UserNomina/SupMisNominas';
import {TablaNominas} from '../components/User/UserNomina/TablaNominas';

export default function CrearNomina() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <NavbarNomina />
            </div>
            <div className="col">
              <SupMisNominas />
              <TablaNominas />
            </div>

          </div>
        </div>        

      </>
    );
  }

  
