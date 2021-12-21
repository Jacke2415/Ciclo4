import SolicitarPer from '../components/User/UserEmpleado/SolicitarPermiso.jsx';
import NavbarEmpleado from '../components/Nav_Bar/NavbarEmpleado.jsx';
import Background from "../components/Login/Background";


export default function CrearEmpleado() {
    return (
      <>
      <Background/>
        <div className="container-lg">
          <div className="row">
            <div className="col">
              <Background/>
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