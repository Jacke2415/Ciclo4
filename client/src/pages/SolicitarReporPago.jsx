import SoliRep from '../components/User/UserEmpleado/SolicitaRep.jsx';
import NavbarEmpleado from '../components/Nav_Bar/NavbarEmpleado.jsx';
import SolicitarReporte from '../components/User/UserEmpleado/SolicitarReporte';


export default function CrearEmpleado() {
    return (
      <>
        <div className="container-lg">
          <div className="row">
            <div className="col">
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