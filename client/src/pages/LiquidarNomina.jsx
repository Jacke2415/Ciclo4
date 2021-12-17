//import '../../../public/css/Login.css'
import NavbarNomina from '../components/Nav_Bar/NavbarNomina';
import SupLiquidar from '../components/User/UserNomina/SupLiquidar';
import { TablaFuncionarioCopia } from '../components/User/UserNomina/TablaFuncionarioCopia';

export default function CrearNomina() {
  return (
    <>
      <div className="container-lg">
        <div className="row">
          <div className="col">
            <NavbarNomina />
          </div>
          <div className="col-10">
            <SupLiquidar /><br /><br /><br /><br /><br /><br /><br />
            <TablaFuncionarioCopia />
          </div>
        </div>
      </div>
    </>
  );
}
