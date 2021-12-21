import SoliVac from '../components/User/UserEmpleado/SolicitarVac.jsx';
import NavbarEmpleado from '../components/Nav_Bar/NavbarEmpleado.jsx';
import Background from "../components/Login/Background";
export default function SolicitarVacaciones() {
    return (
      <>
        <div className="container-lg">
          <div className="row">
            <div className="col">
              <Background/>
              <NavbarEmpleado />
            </div>
            <div className="col-10" >
              <SoliVac  />
            </div>
          </div>
        </div>
        
      </>
    );
}