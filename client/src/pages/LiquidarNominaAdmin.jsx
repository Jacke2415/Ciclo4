//import '../../../public/css/Login.css'
import NavbarAdmin from '../components/Nav_Bar/NavbarAdmin';
import SupLiquidar from '../components/User/UserNomina/SupLiquidar';
import {TablaFuncionario} from '../components/User/UserNomina/TablaFuncionario';

export default function CrearNomina() {
    return (
      <>
        <div className="container-lg">
          <div className="row">
            <div className="col">
              <NavbarAdmin />
            </div>
            <div className="col-10">
              <SupLiquidar />
              <TablaFuncionario />
            </div>
           
          </div>
        </div>
        
        
      

      </>
    );
  }

  
