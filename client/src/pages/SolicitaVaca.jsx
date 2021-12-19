import SoliVac from '../components/User/UserEmpleado/SolicitarVac.jsx';
import NavbarEmpleado from '../components/Nav_Bar/NavbarEmpleado.jsx';

export default function CrearEmpleado() {
    return (
      <>
        <div className="container-lg">
          <div className="row">
            <div className="col">
              <NavbarEmpleado />
            </div>
            <div className="col-10">
              <SoliVac  />
            </div>
          </div>
        </div>
        
      </>
    );
}