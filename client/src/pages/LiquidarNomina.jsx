//import '../../../public/css/Login.css'
import NavbarNomina from "../components/Nav_Bar/NavbarNomina";
import SupLiquidar from "../components/User/UserNomina/SupLiquidar";
import { TablaFuncionario } from "../components/User/UserNomina/TablaFuncionario";

export default function CrearNomina() {
  return (
    <>
      <div className="container-lg">
        <div className="row">
          <div className="col">
            <NavbarNomina />
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
