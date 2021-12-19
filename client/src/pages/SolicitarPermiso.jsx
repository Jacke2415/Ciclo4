import SolicitarPer from '../components/User/UserEmpleado/SolicitarPermiso.jsx';
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
              <SolicitarPer />
            </div>
          </div>
        </div>
        
      </>
    );
}