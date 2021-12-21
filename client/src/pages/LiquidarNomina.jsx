//import '../../../public/css/Login.css'
import NavbarNomina from "../components/Nav_Bar/NavbarNomina";
import SupLiquidar from "../components/User/UserNomina/SupLiquidar";
import { TablaLiquidar } from "../components/User/UserNomina/TablaLiquidar";
import Background from "../components/Login/Background";

export default function CrearNomina() {
  return (
    <>
      <div className="container-lg">
        <div className="row">
          <div className="col">
            <Background />
            <NavbarNomina />
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-12 d-flex flex-row">
                <SupLiquidar />
                <br />
                <br />
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <TablaLiquidar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
