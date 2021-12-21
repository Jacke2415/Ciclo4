import SoliRep from '../components/User/UserEmpleado/SolicitaRep.jsx';
import NavbarEmpleado from '../components/Nav_Bar/NavbarEmpleado.jsx';
import Background from "../components/Login/Background";

export default function SolicitarReporPago() {
    return (
      <>
      <Background />
        <div className="container-lg">
          <div className="row">
            <div className="col">
              <Background />
              <NavbarEmpleado />
            </div>
            <div className="col-10">
              <SoliRep />
            
            </div>
          </div>
        </div>
        
      </>
    );
}